const express = require("express");
const { addHardWoodItem } = require("../controllers/addHardwood");
const { addLaminatelItem } = require("../controllers/addLaminate");
const { addTilesItem } = require("../controllers/addTiles");
const addVinylItem = require("../controllers/addVinylItem");
const upload = require("../middlewares/imageUpload");
const requireSignIn = require("../middlewares/verifyLogin");
const router = express.Router();

router.post(
	"/post-vinyl-item",
	requireSignIn,
	upload.array("images", 2),
	addVinylItem.addVinylItem
);
router.post(
	"/post-tiles-item",
	requireSignIn,
	upload.array("images", 2),
	addTilesItem.addTilesItem
);
router.post(
	"/post-laminate-items",
	requireSignIn,
	upload.array("images", 2),
	addLaminatelItem.addLaminatelItem
);
router.post(
	"/post-hardwood-items",
	requireSignIn,
	upload.array("images", 2),
	addHardWoodItem.addHardWoodItem
);

module.exports = router;
