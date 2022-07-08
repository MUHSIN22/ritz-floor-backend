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

//route for getting single item
router.get(
	"/get-single-item/:page/:section/:id",

	getSection.getSingleItem
);

//route for getting single image
router.get(
	"/get-single-image/:page/:section/:id",

	getSection.getSingleItem
);

module.exports = router;
