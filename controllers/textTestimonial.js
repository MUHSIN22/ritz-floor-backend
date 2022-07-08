const db = require("../models/index");
const TextTestimonials = db.TextTestimonials;

//constroller for getting all the textTestimonials
const getAllTextTestimonials = async (req, res) => {
	try {
		const item = await TextTestimonials.findAll();
		res.status(200).send({ success: true, item });
	} catch (err) {
		console.log(err);
	}
};

//constroller for adding texttestimonial
const addTextTestimonials = async (req, res) => {
	try {
		const { message, img, video } = req.body;
		let info;
		if (!video) {
			info = { message, img };
		} else {
			info = { message, video };
		}

		const item = await TextTestimonials.create(info);
		res.status(200).send({ success: true, item });
	} catch (err) {
		console.log(err);
	}
};
//constroller for deleting texttestimonial
const deleteTextTestimonial = async (req, res) => {
	try {
		const { id } = req.params;
		const item = await TextTestimonials.destroy({ where: { id: id } });
		res.status(200).send({ message: "Item deleted successfully" });
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getAllTextTestimonials,
	addTextTestimonials,
	deleteTextTestimonial,
};
