const db = require("../models/index");
const vinyl = db.Venyl;
const addHardWoodItem = async (req, res) => {
	const img = req.files[0];
	console.log(img.path);
	const { title, subtitle } = req.body;

	data = { img: img.path, title, subtitle };

	const product = await vinyl.create(data);
	res.json(product);
};
module.exports = { addHardWoodItem };
