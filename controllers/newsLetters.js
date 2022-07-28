const db = require("../models/index");
const sendEmail = require("../utils/sendMail");
const NewsLetter = db.NewsLetters;
const path = require('path')

//constroller for getting all the newsletter
const getNewsLetter = async (req, res) => {
	try {
		const letters = await NewsLetter.findAll({where:{status: 0}, attributes: ['id','email']});
		res.status(200).send({ success: true, letters });
	} catch (err) {
		console.log(err);
	}
};

//constroller for sending a new newsletter
const sendNewsLetter = async (req, res) => {
	try {
		let { email } = req.body;
		const letters = await NewsLetter.create({ email });
		res.status(200).send({ success: true });
	} catch (err) {
		console.log(err);
	}
};


const sendNewsLetterEmail = async (req,res) => {
	try{
		let {id} = req.params;
		let newsletter = await NewsLetter.findOne({where:{id: id}})
		if(newsletter){
			let email = await sendEmail(
				newsletter.email,
				"Newsletter from Ritz floor",'Hi,\nFirst and foremost, a good newsletter helps you maintain an active audience and drive sales. If you’re delivering a content-filled newsletter on a regular basis, your audience is more likely to read that newsletter and keep up with what’s going on with your brand. When you write a quality newsletter, you keep your brand in the minds of readers and increase the odds of them purchasing any new products or services you’re offering.',
				'',
				[{
					filename: 'Newsletter.pdf',
					path: path.join(__dirname,'../public/newsletter/newsletter.pdf'),
					contentType: 'application/pdf'
				}])
			if(email.status === 1){
				let statusChanger = await NewsLetter.update({status: 1},{where:{id:id}});
				console.log(statusChanger);
				res.status(200).send({success: true, ...email })
			}else{
				res.status(500).send({success: false, ...email})
			}
		}else{
			res.status(404).send({success:false, message: 'Newsletter not found!'})
		}
	}catch(err){
		res.status(500).send({success:false, err})
	}
}

const deleteNewsLetter = async (req,res) => {
	try{
		let {id} = req.params;
		let deleted = await NewsLetter.destroy({where:{id: id}})
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

module.exports = { getNewsLetter, sendNewsLetter, deleteNewsLetter , sendNewsLetterEmail };
