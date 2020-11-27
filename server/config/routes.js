const express = require("express");
const router = express.Router();
const billingCycleController = require("../controllers/CarsController.js");

router.get("/", billingCycleController.get);
router.get("/dashboard", billingCycleController.dashboard);
router.get("/:Placa", billingCycleController.getByPlaca);
router.get("/", CarsController.get);

module.exports = router;
