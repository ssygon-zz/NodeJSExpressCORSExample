const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 4000;

// Route imports
const productsRoutes = require("./api/routes/products");
const ordersRoutes = require("./api/routes/orders");

// Allow CORS
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204,
};
app.use(cors(corsOptions));

// Setup routes
app.use("/products", productsRoutes);
app.use("/orders", ordersRoutes);

// Start listener
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
