const db = require("../models/index");
const ContactMessage = db.ContactMessage;
const getMessages = async (req, res) => {
	try {
		const item = await ContactMessage.findAll({attributes:['id','name','email','phone','message'], order:[['id','DESC']]});
		res.status(200).send({ success: true, item });
	} catch (err) {
		console.log(err);
	}
};
const postMessage = async (req, res) => {
	try {
		const { name ,message, email, phone } = req.body;
		if (message && email && name && phone) {
			const info = { name, message, email, phone };
			const newMessage = await ContactMessage.create(info);
			res
				.status(200)
				.send({ message: "Message Sent Successfully", newMessage });
		}
	} catch (err) {
		console.log(err);
	}
};

const getEstimation = async (req, res) => {
	try {
		const item = await db.FreeEstimation.findAll({attributes:['id','f_name',"l_name",'email','phone','address',"city","purchase","product","installation"], order:[['id','DESC']]});
		res.status(200).send({ success: true, item });
	} catch (err) {
		console.log(err);
	}
};

const uploadEstimation = async (req, res) => {
	try {
			const newMessage = await db.FreeEstimation.create(req.body);
			res
				.status(200)
				.send({ message: "Submitted Successfully", newMessage });
	} catch (err) {
		res.status(500).send({message:"Internal Server Error!",err})
	}
};
module.exports = { getMessages, postMessage, uploadEstimation, getEstimation };
