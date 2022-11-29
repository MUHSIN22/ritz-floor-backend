const db = require("../models/index");

const Pages = db.Pages;
const ProductSection = db.ProductSection;
const WhyChooseSection = db.WhyChooseSection;
const ClientReview = db.ClientReview;
const AboutUs = db.AboutUs;
const OurWorks = db.OurWorks;
const OurWorkImages = db.OurWorksImages;
const Features = db.Features;
const FeatureImages = db.FeaturesImages;
const LaminateWood = db.LaminateWood;
const Offers = db.Offers;
const UpcommingOffers = db.UpcommingOffers;
const Testimonials = db.Testimonials;
const VideoTestimonials = db.VideoTestimonials;
const AboutUsList = db.AboutUsList;

//controller for getting a single section details

const getSection = async (req, res) => {
	try {
		const { page, section } = req.params;
		if (page == "homepage") {
			if (section == "section-1") {
				const items = await ProductSection.findAll({attributes:['id','title']});
				res.status(200).send({ success: true, items });
			}
			if (section == "section-2") {
				const items = await WhyChooseSection.findAll();
				res.status(200).send({ success: true, items });
			}
			if (section == "section-3") {
				const items = await ClientReview.findAll({attributes:['id','name','content']});
				res.status(200).send({ success: true, items });
			}
		} else if (page == "whychooseus") {
			if (section === "section-1") {
				const items = await AboutUs.findAll();
				res.status(200).send({ success: true, items });
			}
			if (section === "section-2") {
				const item = await Features.findAll();
				const images = await FeatureImages.findAll();
				res.status(200).send({ success: true, item, images });
			}
			if (section === "section-3") {
				const items = await OurWorks.findAll();
				res.status(200).send({ success: true, items });
			}
		} else if (page == "specialoffers") {
			if (section === "section-1") {
				const item = await LaminateWood.findAll({attributes:['id','title','content']});

				res.status(200).send({ success: true, items : item });
			}
			if (section === "section-2") {
				const items = await Offers.findAll({attributes:['id','title','discount','price',"discount_price"]});

				res.status(200).send({ success: true, items });
			}
			if (section === "section-3") {
				const items = await UpcommingOffers.findAll({attributes:['id','discount']});

				res.status(200).send({ success: true, items });
			}
		} else if (page == "testimonials") {
			if (section === "section-2") {
				const item = await Testimonials.findAll({attributes:['id','name','rating','content']});

				res.status(200).send({ success: true, item });
			}
			if (section === "section-3") {
				const item = await VideoTestimonials.findAll();

				res.status(200).send({ success: true, item });
			}
		}
	} catch (err) {
		console.log(err);
	}
};
const getSingleItem = async (req, res) => {
	try {
		const { page, section, id } = req.params;
		if (page == "homepage") {
			if (section == "section-1") {
				const items = await ProductSection.findOne({ where: { id: id } });
				res.status(200).send({ success: true, items });
			}
			if (section == "section-2") {
				const items = await WhyChooseSection.findOne({ where: { id: id } });
				res.status(200).send({ success: true, items });
			}
			if (section == "section-3") {
				const items = await ClientReview.findOne({ where: { id: id } });
				res.status(200).send({ success: true, items });
			}
		} else if (page == "whychooseus") {
			if (section === "section-2") {
				const item = await Features.findOne({ where: { id: id } });
				const images = await FeatureImages.findAll();
				res.status(200).send({ success: true, item, images });
			}
			if (section === "section-3") {
				const item = await OurWorks.findOne({ where: { id: id } });
				const images = await OurWorkImages.findAll();
				res.status(200).send({ success: true, item, images });
			}
		} else if (page == "specialoffers") {
			if (section === "section-1") {
				const item = await LaminateWood.findOne({ where: { id: id } });

				res.status(200).send({ success: true, item });
			}
			if (section === "section-2") {
				const item = await Offers.findOne({ where: { id: id } });

				res.status(200).send({ success: true, item });
			}
			if (section === "section-3") {
				const item = await UpcommingOffers.findOne({ where: { id: id } });
				res.status(200).send({ success: true, item });
			}
		} else if (page == "testimonials") {
			if (section === "section-2") {
				const item = await Testimonials.findOne({ where: { id: id } });

				res.status(200).send({ success: true, item });
			}
			if (section === "section-3") {
				const item = await VideoTestimonials.findOne({ where: { id: id } });

				res.status(200).send({ success: true, item });
			}
		}
	} catch (err) {
		console.log(err);
	}
};
const updateItem = async (req, res) => {
	try {
		const { page, section, id } = req.params;
		console.log(req.body);
		let info;
		const img = req.files && req.files[0] && req.files[0].filename;
		const { name, content, title, discount, url, role, subtitle, points } = req.body;
		if (page == "homepage") {
			console.log('home');
			if (section == "section-1") {
				console.log(title,img,'section-1');
				if (title || img) {
					info = { title, img };
					const items = await ProductSection.update(info, {
						where: { id: id },
					});
					res.status(200).send({ success: true, items });
				} else {
					res.status(400).send({ message: "Please fill all the fields", info });
				}
			}
			if (section == "section-2") {
				if (title && content && img) {
					let info = {title,content,img}
					const isAlreadyAvailable = await WhyChooseSection.findOne({id:id});
					if(isAlreadyAvailable){
						const items = await WhyChooseSection.update(info, {
							where: { id: id },
						});
						res.status(200).send({ success: true, items });
						return true
					}
					const items = await WhyChooseSection.create(info);
					res.status(200).send({ success: true, items });
					
				} else {
					res.status(400).send({ message: "Please fill all the fields", info });
				}
			}
			if (section == "section-3") {
				if (name && img && content) {
					info = { name, img, content };
					const items = await ClientReview.update(info, { where: { id: id } });
					res.status(200).send({ success: true, items });
				} else {
					res.status(400).send({ message: "Please fill all the fields", info });
				}
			}
		} else if (page == "whychooseus") {
			info = {}
			if (section === "section-1") {
				if(title !== ""){
					info.title = title
				}
				if(subtitle !== ''){
					info.subtitle = subtitle
				}
				if(content !== ""){
					info.content = content
				}
				if(points !== ""){
					info.points = points
				}
				if(img){
					info.IMG = img
				}
				const alreadyAvailable = await AboutUs.findOne({id: 1});
				if(alreadyAvailable){
					console.log("Alreasdy available");
					const items = await AboutUs.update(info, {where: {id: 1}});
					res.status(200).send({success: true, items});
					return true
				}
				info.id = 1;
				const items = await AboutUs.create(info);
				res.status(200).send({success: true, items});
				
			}
			if (section === "section-2") {
				if (title && content) {
					info = { title, content  };
					const item = await Features.update(info, { where: { id: id } });
					const images = await FeatureImages.findAll();
					res.status(200).send({ success: true, item, images });
				} else {
					res.status(400).send({ message: "Please fill all the fields", info });
				}
			}
			if (section === "section-3") {
				if (title && content) {
					const item = await OurWorks.update(info, { where: { id: id } });

					res.status(200).send({ success: true, item, images });
				} else {
					res.status(400).send({ message: "Please fill all the fields", info });
				}
			}
		} else if (page == "specialoffers") {
			if (section === "section-1") {
				if (title && content && img) {
					const item = await LaminateWood.update(info, { where: { id: id } });

					res.status(200).send({ success: true, item });
				} else {
					res.status(400).send({ message: "Please fill all the fields", info });
				}
			}
			if (section === "section-2") {
				if (title && img && discount) {
					const item = await Offers.update(info, { where: { id: id } });

					res.status(200).send({ success: true, item });
				} else {
					res.status(400).send({ message: "Please fill all the fields", info });
				}
			}
			if (section === "section-3") {
				if (img && discount) {
					const item = await UpcommingOffers.update(info, {
						where: { id: id },
					});

					res.status(200).send({ success: true, item });
				} else {
					res.status(400).send({ message: "Please fill all the fields", info });
				}
			}
		} else if (page == "testimonials") {
			if (section === "section-2") {
				if (content && role && name && img) {
					const item = await Testimonials.update(info, { where: { id: id } });

					res.status(200).send({ success: true, item });
				} else {
					res.status(400).send({ message: "Please fill all the fields", info });
				}
			}
			if (section === "section-3") {
				if (url) {
					const item = await VideoTestimonials.update(info, {
						where: { id: id },
					});

					res.status(200).send({ success: true, item });
				} else {
					res.status(400).send({ message: "Please fill all the fields", info });
				}
			}
		}
	} catch (err) {
		console.log(err);
	}
};
const deleteContent = async (req, res) => {
	try {
		const { page, section, id } = req.params;
		console.log(page,section,id);
		if (page == "homepage") {
			if (section == "section-1") {
				const items = await ProductSection.destroy({ where: { id: id } });
				res.status(200).send({ success: true, items });
			}
			if (section == "section-2") {
				const items = await WhyChooseSection.destroy({ where: { id: id } });
				res.status(200).send({ success: true, items });
			}
			if (section == "section-3") {
				const items = await ClientReview.destroy({ where: { id: id } });
				res.status(200).send({ success: true, items });
			}
		} else if (page == "whychooseus") {
			if (section === "section-2") {
				const item = await Features.destroy({ where: { id: id } });
				const images = await FeatureImages.findAll();
				res.status(200).send({ success: true, item, images });
			}
			if (section === "section-3") {
				const item = await OurWorks.destroy({ where: { id: id } });
				const images = await OurWorkImages.findAll();
				res.status(200).send({ success: true, item, images });
			}
		} else if (page == "specialoffers") {
			if (section === "section-1") {
				const item = await LaminateWood.destroy({ where: { id: id } });

				res.status(200).send({ success: true, item });
			}
			if (section === "section-2") {
				const item = await Offers.destroy({ where: { id: id } });

				res.status(200).send({ success: true, item });
			}
			if (section === "section-3") {
				const item = await UpcommingOffers.destroy({ where: { id: id } });

				res.status(200).send({ success: true, item });
			}
		} else if (page == "testimonials") {
			if (section === "section-2") {
				const item = await Testimonials.destroy({ where: { id: id } });

				res.status(200).send({ success: true, item });
			}
			if (section === "section-3") {
				console.log("here in section - 3");
				const item = await VideoTestimonials.destroy({ where: { id: id } });

				res.status(200).send({ success: true, item });
			}
		}
	} catch (err) {
		console.log(err);
	}
};
const updateImages = async (req, res) => {
	try {
		const { page, section, id } = req.params;
		const img = req.files[0].filename;

		if (img) {
			if (page == "whychooseus") {
				if (section === "section-2") {
					const item = await FeatureImages.update(
						{ img },
						{ where: { id: id } }
					);

					res.status(200).send({ success: true, item });
				}
				if (section === "section-3") {
					const item = await OurWorkImages.update(
						{ img },
						{ where: { id: id } }
					);
					res.status(200).send({ success: true, item });
				}
			}
		}
	} catch (err) {
		console.log(err);
	}
};
const deleteImage = async (req, res) => {
	try {
		const { page, section, id } = req.params;
		const img = req.files[0].filename;

		if (img) {
			if (page == "whychooseus") {
				if (section === "section-2") {
					const item = await FeatureImages.destroy({ where: { id: id } });

					res.status(200).send({ success: true, item });
				}
				if (section === "section-3") {
					const item = await OurWorkImages.destroy({ where: { id: id } });
					res.status(200).send({ success: true, item });
				}
			}
		}
	} catch (err) {
		console.log(err);
	}
};
const getSingleImage = async (req, res) => {
	try {
		const { page, section, id } = req.params;

		if (page == "whychooseus") {
			if (section === "section-2") {
				const item1 = await FeatureImages.findOne({ where: { id: id } });
				res.status(200).send({ success: true, item1 });
			}
			if (section === "section-3") {
				const item = await OurWorkImages.findOne({ where: { id: id } });
				res.status(200).send({ success: true, item });
			}
		}
	} catch (err) {
		console.log(err);
	}
};

const uploadItems = async (req, res) => {
	try {
		const { page, section } = req.params;
		let info;
		console.log(req.body,req.files);
		const img = req.files && req.files[0] && req.files[0].filename;
		const { name, content, title, discount, url, role, rating, price } = req.body;
		if (page == "homepage") {
			console.log('home');
			if (section == "section-1") {
				if (title && img) {
					info = { title, img };
					const items = await ProductSection.create(info);
					res.status(200).send({ success: true, items });
				} else {
					res.status(400).send({ message: "Please fill all the fields", info });
				}
			}
			if (section == "section-2") {
				if (title && content && img) {
					const items = await WhyChooseSection.create(info);
					res.status(200).send({ success: true, items });
				} else {
					res.status(400).send({ message: "Please fill all the fields", info });
				}
			}
			if (section == "section-3") {
				if (name && content) {
					info = { name, content };
					if(img) info.img = img
					const items = await ClientReview.create(info);
					res.status(200).send({ success: true, items });
				} else {
					res.status(400).send({ message: "Please fill all the fields", info });
				}
			}
		} else if (page == "whychooseus") {
			if (section === "section-2") {
				console.log(title,content);
				if (title && content) {
					info = { title, content };
					// const item = await Features.create(info);
					// const images = await FeatureImages.findAll();
					res.status(200).send({ success: true });
				} else {
					res.status(400).send({ message: "Please fill all the fields", info });
				}
			}
			if (section === "section-3") {
				if (title && content) {
					const item = await OurWorks.create(info);
					res.status(200).send({ success: true, item, images });
				} else {
					res.status(400).send({ message: "Please fill all the fields", info });
				}
			}
		} else if (page == "specialoffers") {
			if (section === "section-1") {
				if (title && content && img) {
					info = {title,content,img}
					const item = await LaminateWood.create(info);

					res.status(200).send({ success: true, items : item });
				} else {
					res.status(400).send({ message: "Please fill all the fields", info });
				}
			}
			if (section === "section-2") {
				if (title && img && discount && price) {
					let discount_price = parseInt(price) - ((parseInt(discount)/100) * parseInt(price));
					info = {title, img, discount,price, discount_price}
					const items = await Offers.create(info);
					res.status(200).send({ success: true, items : items });
				} else {
					res.status(400).send({ message: "Please fill all the fields", info });
				}
			}
			if (section === "section-3") {
				if (img && discount) {
					info = {img,discount}
					const item = await UpcommingOffers.create(info);

					res.status(200).send({ success: true, items : item });
				} else {
					res.status(400).send({ message: "Please fill all the fields", info });
				}
			}
		} else if (page == "testimonials") {
			if (section === "section-2") {
				if (content && rating && name) {
					info = { content , rating , name }
					const item = await Testimonials.create(info);
					res.status(200).send({ success: true, items : item });
				} else {
					res.status(400).send({ message: "Please fill all the fields", info });
				}
			}
			if (section === "section-3") {
				if (url) {
					info = {url}
					const item = await VideoTestimonials.create(info);

					res.status(200).send({ success: true, items : item });
				} else {
					res.status(400).send({ message: "Please fill all the fields", info });
				}
			}
		}
	} catch (err) {
		console.log(err);
	}
};

const uploadWhyChooseFeatures = async (req,res) => {
	try{
		let {title,content} = req.body;
		let img_living = req.files && req.files.img_living&&  req.files.img_living[0].filename;
		let img_bed = req.files && req.files.img_bed &&  req.files.img_bed[0].filename;
		let img_office = req.files && req.files.img_office &&  req.files.img_office[0].filename;
		let img_dining = req.files && req.files.img_dining &&  req.files.img_dining[0].filename;
		let img_kitchen = req.files && req.files.img_kitchen &&  req.files.img_kitchen[0].filename;
		let img_balcony = req.files && req.files.img_balcony &&  req.files.img_balcony[0].filename;
		
		let isAlreadyAvailable = await Features.findOne({id: 1});
		if(isAlreadyAvailable){
			const item = await Features.update({
				title,
				content,
				img_living,
				img_bed,
				img_office,
				img_dining,
				img_kitchen,
				img_balcony
			},{where: {id:1}});
			res.status(200).send({success:true, item})
			return true
		}
		const item = await Features.create({
			id: 1,
			title,
			content,
			img_living,
			img_bed,
			img_office,
			img_dining,
			img_kitchen,
			img_balcony
		});
		res.status(200).send({success:true, item})
		
	}catch(err){
		console.log(err);
		res.status(400).send({success:false,err});
	}
}

const uploadAboutWorks = async (req,res) => {
	try{
		let {title,content} = req.body;
		let img_1 = req.files && req.files.img_1&&  req.files.img_1[0].filename;
		let img_2 = req.files && req.files.img_2 &&  req.files.img_2[0].filename;
		let img_3 = req.files && req.files.img_3 &&  req.files.img_3[0].filename;
		let img_4 = req.files && req.files.img_4 &&  req.files.img_4[0].filename;
		let img_5 = req.files && req.files.img_5 &&  req.files.img_5[0].filename;
		let img_6 = req.files && req.files.img_6 &&  req.files.img_6[0].filename;
		let img_7 = req.files && req.files.img_7 &&  req.files.img_7[0].filename;
		let img_8 = req.files && req.files.img_8 &&  req.files.img_8[0].filename;
		const isAlreadyAvailable = await OurWorks.findOne({id:1})
		if(isAlreadyAvailable){
			const item = await OurWorks.update({
				title,
				content,
				img_1,
				img_2,
				img_3,
				img_4,
				img_5,
				img_6,
				img_7,
				img_8
			},{where: {id:1}});
			res.status(200).send({success:true, item})
			return true
		}
		const item = await OurWorks.create({
			id:1,
			title,
			content,
			img_1,
			img_2,
			img_3,
			img_4,
			img_5,
			img_6,
			img_7,
			img_8
		},{where: {id:1}});
		res.status(200).send({success:true, item})
		
	}catch(err){
		console.log(err);
		res.status(400).send({success:false,err});
	}
}

const getWhyChooseFeatures = async(req,res) => {
	try{
		let item = await Features.findAll();
		res.status(200).send({success:true,item})
	}catch(err){
		res.status(400).send({success:false})
	}
}

module.exports = {
	getSection,
	updateItem,
	deleteContent,
	updateImages,
	getSingleItem,
	getSingleImage,
	deleteImage,
	uploadItems,
	uploadWhyChooseFeatures,
	getWhyChooseFeatures,
	uploadAboutWorks
};
