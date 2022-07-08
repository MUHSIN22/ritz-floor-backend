const db = require("../models/index");
const ContactMessage = db.ContactMessage;
const getMessages = async (req, res) => {
	try {
		const item = await ContactMessage.findAll();
		res.status(200).send({ success: true, item });
	} catch (err) {
		console.log(err);
	}
};
const postMessage = async (req, res) => {
	try {
		if (message && email) {
			const info = { message, email };
			const newMessage = await ContactMessage.create(info);
			res
				.status(200)
				.send({ message: "Message Sent Successfully", newMessage });
		}
	} catch (err) {
		console.log(err);
	}
	const { message, email } = req.body;
};
module.exports = { getMessages, postMessage };
