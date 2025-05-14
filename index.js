import express from "express";
import categoriesRoute from "./src/routes/categories.route.js";
import productsRoute from "./src/routes/product.route.js";
import ordersRoute from "./src/routes/order.route.js";

const app = express();
app.use(express.json());

// API routes
app.use("/api", categoriesRoute);
app.use("/api", productsRoute);
app.use("/api", ordersRoute);
// app.use('/api', sendEmailRoute);

const port = process.env.PORT || 3069;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
