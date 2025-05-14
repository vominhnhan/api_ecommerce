import express from "express";
import productController from "../controllers/product.controller.js";

const productsRoute = express.Router();

productsRoute.get("/products", productController.getListProductsByCategory);
productsRoute.get("/products/search", productController.searchProducts);

export default productsRoute;
