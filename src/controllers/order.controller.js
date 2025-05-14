import {
  responseError,
  responseSuccess,
} from "../common/helpers/response.helper.js";
import orderService from "../services/order.service.js";

const orderController = {
  createOrder: async (req, res) => {
    try {
      const data = await orderService.createOrder(req);
      const resData = responseSuccess(data, `Create order successfully`, 201);
      return res.status(resData.code).json(resData);
    } catch (error) {
      console.log(error);
      const resData = responseError(error.message, 400);
      return res.status(resData.code).json(resData);
    }
  },
};

export default orderController;
