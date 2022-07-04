const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "images/vinyl");
	},
	filename: (req, file, cb) => {
		//const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * IE9);
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const upload = multer({ storage: storage });

module.exports = upload;
