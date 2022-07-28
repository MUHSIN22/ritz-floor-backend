const express = require("express");
const getSection = require("../controllers/ItemsInfo");
const adminAuthenticator = require("../middlewares/adminAuthenticator");
const upload = require("../middlewares/imageUpload");
const { sendMail } = require("../utils/sendMail");

const router = express.Router();

const customUpload = upload.fields([{ name: 'img_living', maxCount: 1 }, { name: 'img_bed', maxCount: 1 }, { name: 'img_kitchen', maxCount: 1 }, { name: 'img_office', maxCount: 1 }, { name: 'img_dining', maxCount: 1 },{ name: 'img_balcony', maxCount: 1 } ])
const customWorkUpload = upload.fields([{name: 'img_1',maxCount:1},{name: 'img_2',maxCount:1},{name: 'img_3',maxCount:1},{name: 'img_4',maxCount:1},{name: 'img_5',maxCount:1},{name: 'img_6',maxCount:1},{name: 'img_7',maxCount:1},{name: 'img_8',maxCount:1}])

//route for getting all products list
router.get("/get-content/:page/:section", getSection.getSection);

//route for updating content
router.put(
	"/update-content/:page/:section/:id", adminAuthenticator ,
	upload.array("img", 2),
	getSection.updateItem
);

// route for uploading new data

router.post('/:page/:section',adminAuthenticator, upload.array("img",1),getSection.uploadItems)

router.put('/about-feature',adminAuthenticator, customUpload,getSection.uploadWhyChooseFeatures)
router.get('/about-feature', getSection.getWhyChooseFeatures);

router.put('/about-works',adminAuthenticator,customWorkUpload,getSection.uploadAboutWorks)

//route for deleting content
router.delete(
	"/delete-content/:page/:section/:id",
	adminAuthenticator,
	getSection.deleteContent
);

//route for deleting images
router.delete(
	"/delete-content/:page/:section/:id",
	adminAuthenticator,
	getSection.deleteImage
);

//route for updating images
router.put(
	"/update-image/:page/:section/:id",
	adminAuthenticator,
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
	getSection.getSingleImage
);

module.exports = router;
