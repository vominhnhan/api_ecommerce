import express from "express";
import orderController from "../controllers/order.controller.js";

const ordersRoute = express.Router();

ordersRoute.post("/orders", orderController.createOrder);

export default ordersRoute;
