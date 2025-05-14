import {
  responseError,
  responseSuccess,
} from "../common/helpers/response.helper.js";
import productService from "../services/product.service.js";

const productController = {
  getListProductsByCategory: async (req, res) => {
    try {
      const data = await productService.getListProductsByCategory(req);
      const resData = responseSuccess(
        data,
        `Get list all products by category successfully`,
        200
      );
      return res.status(resData.code).json(resData);
    } catch (error) {
      const resData = responseError(error.message, 404);
      return res.status(resData.code).json(resData);
    }
  },
  searchProducts: async (req, res) => {
    try {
      const data = await productService.searchProducts(req);
      const resData = responseSuccess(
        data,
        `Search products successfully`,
        200
      );
      return res.status(resData.code).json(resData);
    } catch (error) {
      const resData = responseError(error.message, 404);
      return res.status(resData.code).json(resData);
    }
  },
};

export default productController;
