const express = require("express");
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

module.exports = router;