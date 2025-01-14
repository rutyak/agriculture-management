
const express = require("express");
const fetchController = require("../controller/fetchController");
const createController = require("../controller/createController");
const Field = require("../model/FieldSchema");
const updateController = require("../controller/updateController");
const deleteController = require("../controller/deleteController");
const router = express.Router();

router.post("/create/field", createController)

router.get("/fetch/field", fetchController)

router.patch("/update/field/:id", updateController)

router.delete("/delete/field/:id", deleteController);


module.exports = router; 