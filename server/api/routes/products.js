const express = require("express");
const router = express.Router();

const endPointName = "products";

router.get("/", (req, res, next) => {
  const data = {
    message: `Handling GET requests to /${endPointName}`,
  };
  res.status(200).json(data);
});

router.post("/", (req, res, next) => {
  const data = {
    message: `Handling POST requests to /${endPointName} - PRODUCT WAS CREATED!`,
  };
  res.status(201).json(data);
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  if (id === "123") {
    const data = {
      message: `Handling GET requests to /${endPointName}/{id} - YOU DISCOVERED A SPECIAL ID=123`,
      id: id,
    };
    res.status(200).json(data);
  } else {
    const data = {
      message: `Handling GET requests to /${endPointName}/{id}`,
      id: id,
    };
    res.status(200).json(data);
  }
});

router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  const data = {
    message: `Handling PATCH requests to /${endPointName}/{id} - PRODUCT WAS UPDATED!`,
    id: id,
  };
  res.status(200).json(data);
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  const data = {
    message: `Handling DELETE requests to /${endPointName}/{id} - PRODUCT WAS DELETED!`,
    id: id,
  };
  res.status(200).json(data);
});

module.exports = router;
