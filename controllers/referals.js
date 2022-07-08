const db = require("../models/index");
const User = db.User;
const Referals = db.Referals;

//constroller for generating a unique referral code
const generateReferal = async (req, res) => {
	try {
		const id = req.params.id;
		const user = await User.findOne({ where: { id: id } });
		let phone = user.phone;
		let name = user.name;
		const date = new Date().toLocaleDateString();
		let dateCode = "";
		for (i = 0; i <= [...date].length - 1; i++) {
			if ([...date][i] !== "/") {
				dateCode += [...date][i];
			}
		}

		let first_name = name.slice(0, 4);
		let new_phone = phone.slice(-4);

		const referal_code = first_name.toUpperCase() + dateCode + new_phone;
		await User.update({ referal_code: referal_code }, { where: { id: id } });
		res
			.status(200)
			.send({ message: "Referal-code Generated successfully", referal_code });
	} catch (err) {
		console.log(err);
	}
};

//constroller for getting refferrals with reffered by and date
const getAllReferals = async (req, res) => {
	try {
		const item = await Referals.findAll();
		res.status(200).send({ success: true, item });
	} catch (err) {
		console.log(err);
	}
};
module.exports = { generateReferal, getAllReferals };
