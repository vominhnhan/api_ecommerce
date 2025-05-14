import {
  responseError,
  responseSuccess,
} from "../common/helpers/response.helper.js";
import categoriesService from "../services/categories.service.js";

const categoriesController = {
  getListCategories: async (req, res) => {
    try {
      const data = await categoriesService.getListCategories(req);
      const resData = responseSuccess(
        data,
        `Get list all categories successfully`,
        200
      );
      return res.status(resData.code).json(resData);
    } catch (error) {
      const resData = responseError(error.message, 404);
      return res.status(resData.code).json(resData);
    }
  },
};

export default categoriesController;
