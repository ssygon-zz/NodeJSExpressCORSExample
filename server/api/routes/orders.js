const express = require("express");
const router = express.Router();

const endPointName = "orders";

router.get("/", (req, res, next) => {
  const data = {
    message: `Handled GET request /${endPointName}`,
  };
  res.status(200).json(data);
});

router.post("/", (req, res, next) => {
  const data = {
    message: `Handled POST request /${endPointName} - ORDER WAS CREATED!`,
  };
  res.status(201).json(data);
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  if (id === "123") {
    const data = {
      message: `Handled GET request /${endPointName}/${id} - YOU DISCOVERED A SPECIAL ID=123`,
      id: id,
    };
    res.status(200).json(data);
  } else {
    const data = {
      message: `Handled GET request /${endPointName}/${id}`,
      id: id,
    };
    res.status(200).json(data);
  }
});

router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  const data = {
    message: `Handled PATCH request /${endPointName}/${id} - ORDER WAS UPDATED!`,
    id: id,
  };
  res.status(200).json(data);
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  const data = {
    message: `Handled DELETE request /${endPointName}/${id} - ORDER WAS DELETED!`,
    id: id,
  };
  res.status(200).json(data);
});

module.exports = router;
