const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const socialController = require("../controllers/socials.controller");

// All Middle wares
const fileUpload = require("../middleware/file-upload");

router.get("/", socialController.getSocial);

router.get("/:pid", socialController.getSocialById);


//With validation
router.post(
  "/",
  fileUpload.single("image"),
  [check("title").notEmpty(), check("url").notEmpty(), check("icon").notEmpty()],
  socialController.createSocial
);
//With validation
router.patch(
  "/:pid",
  [check("title").notEmpty(), check("url").notEmpty(), check("icon").notEmpty()],
  socialController.updateSocial
);

router.delete("/:pid", socialController.deleteSocial);

//Module syntax is nodejs
module.exports = router;
