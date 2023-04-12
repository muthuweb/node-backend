const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const serviceController = require("../controllers/services.controller");

// All Middle wares
const fileUpload = require("../middleware/file-upload");

router.get("/", serviceController.getService);

router.get("/:pid", serviceController.getServiceById);

//Without validation
// router.post("/", serviceController.createService);
//router.patch("/:pid", serviceController.updateService);

//With validation
router.post(
  "/",
  fileUpload.single("image"),
  [check("title").notEmpty(), check("description").isLength({ min: 5 })],
  serviceController.createService
);
//With validation
router.patch(
  "/:pid",
  [check("title").notEmpty(), check("description").isLength({ min: 5 })],
  serviceController.updateService
);

router.delete("/:pid", serviceController.deleteService);

//Module syntax is nodejs
module.exports = router;
