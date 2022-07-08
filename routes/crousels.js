const express = require("express");
const getSection = require("../controllers/ItemsInfo");
const upload = require("../middlewares/imageUpload");

const router = express.Router();

//route for getting all products list
router.get("/get-content/:page/:section", getSection.getSection);

//route for updating content
router.put(
	"/update-content/:page/:section/:id",
	upload.array("img", 2),
	getSection.updateItem
);

//route for deleting content
router.delete(
	"/delete-content/:page/:section/:id",

	getSection.deleteContent
);

//route for updating images
router.put(
	"/update-image/:page/:section/:id",
	upload.array("img", 2),

	getSection.updateImages
);

module.exports = router;
