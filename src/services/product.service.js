import {
  BadRequestException,
  NotFoundException,
} from "../common/helpers/error.helper.js";
import prisma from "../common/prisma/init.prisma.js";

const productService = {
  getListProductsByCategory: async (req) => {
    const { category_id } = req.query;
    if (!category_id) {
      throw new BadRequestException("Category ID is required");
    }

    // Check category exists
    const category = await prisma.categories.findUnique({
      where: {
        category_id: Number(category_id),
      },
    });
    if (!category) {
      throw new NotFoundException("Category not found");
    }

    // Get list products by category
    return await prisma.products.findMany({
      where: {
        category_id: Number(category_id),
      },
    });
  },

  searchProducts: async (req) => {
    const { query, category_id, min_price, max_price, size, color } = req.query;

    if (!query) {
      throw new BadRequestException("Query is required");
    }

    const product = await prisma.products.findMany({
      where: {
        product_name: {
          contains: query.toLowerCase(),
        },
        category_id: category_id ? Number(category_id) : undefined,
        price: {
          gte: min_price ? Number(min_price) : undefined,
          lte: max_price ? Number(max_price) : undefined,
        },
        size: size ? size : undefined,
        color: color ? color : undefined,
      },
    });

    return product;
  },
};

export default productService;
