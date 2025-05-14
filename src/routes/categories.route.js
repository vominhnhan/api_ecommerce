import express from "express";
import categoriesController from "../controllers/categories.controller.js";

const categoriesRoute = express.Router();

categoriesRoute.get("/categories", categoriesController.getListCategories);

export default categoriesRoute;
