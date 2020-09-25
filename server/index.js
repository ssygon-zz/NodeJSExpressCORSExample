const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 4000;

// Allow CORS
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204,
};
app.use(cors(corsOptions));

// Setup products endpoint
app.get("/products/:id", function (req, res, next) {
  const data = {
    msg: "my message response",
  };
  res.json(data);
});

// Start listener
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
