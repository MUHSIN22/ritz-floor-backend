const db = require("../models/index");
const Laminate = db.Laminate;
const addLaminatelItem = async (req, res) => {
	const img = req.files[0];
	console.log(img.path);
	const { title, subtitle } = req.body;

	data = { img: img.path, title, subtitle };

	const product = await Laminate.create(data);
	res.json(product);
};
module.exports = { addLaminatelItem };
