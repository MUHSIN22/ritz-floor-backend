const db = require("../models/index");
const Tiles = db.Tiles;
const addHardWoodItem = async (req, res) => {
	const img = req.files[0];
	console.log(img.path);
	const { title, subtitle } = req.body;

	data = { img: img.path, title, subtitle };

	const product = await Tiles.create(data);
	res.json(product);
};
module.exports = { addHardWoodItem };
