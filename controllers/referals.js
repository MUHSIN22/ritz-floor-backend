const { discountTemplate } = require("../mailTemplates/discountTemplate");
const db = require("../models/index");
const sendEmail = require("../utils/sendMail");
const User = db.User;
const Referals = db.Referals;

//constroller for generating a unique referral code
const generateReferal = async (req, res) => {
	try{
		let {name,phone,email} = req.body;
		let date = new Date().toLocaleDateString().split('/');
		let dateString = date[0]+date[1]+date[2][2]+date[2][3]
		let nameCode = name.slice(0, 4);
		let phoneCode = phone.slice(-4);
		let referal_code = nameCode.toUpperCase() +phoneCode+dateString;
		let info = {name,phone,email,referal_code};
		await Referals.create(info)
		res.status(200).send({success:true})
	}catch(err){
		res.send(500).send({success:false,err})
	}
};

const sendReferalEmail = async (req,res) => {
	try{
		let {id} = req.params;
		let referal = await Referals.findOne({where:{id: id}})
		if(referal){
			let email = await sendEmail(referal.email,"Referal discount from Ritz floor",'',discountTemplate(referal.name,20,referal.referal_code))
			console.log(email);
			if(email.status === 1){
				let statusChanger = await Referals.update({status: 1},{where:{id:id}});
				console.log(statusChanger);
				res.status(200).send({success: true, ...email })
			}else{
				res.status(500).send({success: false, ...email})
			}
		}else{
			res.status(404).send({success:false, message: 'Referal not found!'})
		}
	}catch(err){
		res.status(500).send({success:false, err})
	}
}

const deleteReferal = async (req,res) => {
	try{
		let {id} = req.params;
		let deleted = await Referals.destroy({where:{id: id}})
		if(deleted === 1){
			res.status(200).send({success:true, message: "Deleted successfully!"})
		}else{
			res.status(404).send({success:false, message: "No data found!"})
		}
		res.send({deleted})
	}catch(err){
		console.log(err.toString());
		res.status(500).send({success: true, err: err.toString()})
	}
}

//constroller for getting refferrals with reffered by and date
const getAllReferals = async (req, res) => {
	try {
		const item = await Referals.findAll({where:{status: 0},attributes:['id','name','email','phone','referal_code']});
		res.status(200).send({ success: true, item });
	} catch (err) {
		console.log(err);
	}
};


module.exports = { deleteReferal ,generateReferal, getAllReferals , sendReferalEmail };
