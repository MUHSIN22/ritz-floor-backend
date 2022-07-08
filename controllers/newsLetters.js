const db = require("../models/index");
const NewsLetter = db.NewsLetters;

//constroller for getting all the newsletter
const getNewsLetter = async (req, res) => {
	try {
		const letters = await NewsLetter.findAll();
		res.status(200).send({ success: true, letters });
	} catch (err) {
		console.log(err);
	}
};

//constroller for sending a new newsletter
const sendNewsLetter = async (req, res) => {
	try {
		const letters = await NewsLetter.findAll();
		res.status(200).send({ success: true });
	} catch (err) {
		console.log(err);
	}
};

module.exports = { getNewsLetter, sendNewsLetter };
