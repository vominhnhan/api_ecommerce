import nodemailer from "nodemailer";
import prisma from "../common/prisma/init.prisma.js";

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vominhnhan.dev@gmail.com",
    pass: "sxxz vktf rbsd vczo",
  },
});

export const sendOrderConfirmationEmail = async (userId, orderDetails) => {
  try {
    // Get email of user
    const user = await prisma.users.findUnique({
      where: { user_id: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const mailOptions = {
      from: "vominhnhan.dev@gmail.com",
      to: user.email,
      subject: `Order Confirmation - Order #${orderDetails.order_id}`,
      text: `Thank you for your order! Here are your order details:\n\n
               Order ID: ${orderDetails.order_id}\n
               Total Price: ${orderDetails.total_price}\n
               Shipping Fee: ${orderDetails.shipping_fee}\n
               Order Status: ${orderDetails.order_status}\n
               
               We will process your order shortly.`,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending confirmation email");
  }
};
