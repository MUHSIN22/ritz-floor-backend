const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../models");
const User = db.User;

const loginUser = async (req, res) => {
	try {
		const { uname, password } = req.body;
		console.log(uname);
		const user = await User.findOne({
			where: {
				USERNAME: uname,
			},
		});
		console.log(user.id);
		if (user && user.PASSWORD === password) {
			const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET, {
				expiresIn: "1d",
			});
			res.status(200).send({ message: "Login successfull !1", token: token });
		} else {
			res.json("Invalid Credentials");
		}
	} catch (err) {
		console.log(err);
	}
};
module.exports = { loginUser };
