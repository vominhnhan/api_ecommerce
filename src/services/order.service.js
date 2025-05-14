import { BadRequestException } from "../common/helpers/error.helper.js";
import prisma from "../common/prisma/init.prisma.js";
import { sendOrderConfirmationEmail } from "./sendEmail.service.js";

const orderService = {
  createOrder: async (req) => {
    const { user_id, items, payment_method, shipping_fee } = req.body;

    // Check user exists
    const user = await prisma.users.findUnique({
      where: {
        user_id: Number(user_id),
      },
    });
    if (!user) {
      throw new BadRequestException(`User with id ${user_id} not found`);
    }

    // Calculate total price
    let totalPrice = 0;
    for (let item of items) {
      const product = await prisma.products.findUnique({
        where: {
          product_id: Number(item.product_id),
        },
      });
      if (!product) {
        throw new BadRequestException(
          `Product with id ${item.product_id} not found`
        );
      }

      // Check quantity in store
      const storeProduct = await prisma.stores_products.findFirst({
        where: {
          store_id: Number(item.store_id),
          product_id: Number(item.product_id),
        },
      });
      if (!storeProduct) {
        throw new BadRequestException(
          `Product with id ${item.product_id} not found in store`
        );
      }
      if (storeProduct.quantity_in_store < item.quantity) {
        throw new BadRequestException(
          `Not enough quantity for product with id ${item.product_id} in store`
        );
      }
      totalPrice += storeProduct.price_in_store * item.quantity;
    }
    // Get shipping address
    const shippingAddress = await prisma.address.findFirst({
      where: {
        user_id: Number(user_id),
      },
    });
    if (!shippingAddress) {
      throw new BadRequestException(`Shipping address not found`);
    }

    // Create order
    const order = await prisma.orders.create({
      data: {
        user_id: Number(user_id),
        total_price: totalPrice + shipping_fee,
        shipping_address_id: shippingAddress.address_id,
        shipping_fee: shipping_fee,
        order_details: {
          create: items.map((item) => ({
            store_product_id: item.product_id,
            quantity: item.quantity,
            price_order: item.price,
          })),
        },
      },
    });

    // Update quantity in store
    for (let item of items) {
      const storeProduct = await prisma.stores_products.findFirst({
        where: {
          store_id: item.store_id,
          product_id: item.product_id,
        },
      });

      if (storeProduct) {
        const newQuantity = storeProduct.quantity_in_store - item.quantity;

        await prisma.stores_products.update({
          where: {
            store_product_id: storeProduct.store_product_id,
          },
          data: {
            quantity_in_store: newQuantity,
          },
        });
      }
    }

    // Create payment
    const payment = await prisma.payments.create({
      data: {
        order_id: order.order_id,
        payment_method: payment_method,
        payment_amount: totalPrice + shipping_fee,
        payment_status: "PENDING",
      },
    });

    // Send email confirmation
    await sendOrderConfirmationEmail(user_id, order);
    return { order, payment };
  },
};

export default orderService;
