import prisma from "../common/prisma/init.prisma.js";

const categoriesService = {
  getListCategories: async (req) => {
    return await prisma.categories.findMany();
  },
};

export default categoriesService;
