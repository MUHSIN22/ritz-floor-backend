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
		const { message, img } = req.body;
		const info = { message, img };
		const item = await TextTestimonials.create(info);
		res.status(200).send({ success: true, item });
	} catch (err) {
		console.log(err);
	}
};

module.exports = { getAllTextTestimonials, addTextTestimonials };
