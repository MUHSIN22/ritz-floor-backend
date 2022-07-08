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
				const items = await ProductSection.findAll();
				res.status(200).send({ success: true, items });
			}
			if (section == "section-2") {
				const items = await WhyChooseSection.findAll();
				res.status(200).send({ success: true, items });
			}
			if (section == "section-3") {
				const items = await ClientReview.findAll();
				res.status(200).send({ success: true, items });
			}
		} else if (page == "whychooseus") {
			if (section === "section-1") {
				const item = await AboutUs.findAll();
				const list = await AboutUsList.findAll();

				res.status(200).send({ success: true, item, list });
			}
			if (section === "section-2") {
				const item = await Features.findAll();
				const images = await FeatureImages.findAll();
				res.status(200).send({ success: true, item, images });
			}
			if (section === "section-3") {
				const item = await OurWorks.findAll();
				const images = await OurWorkImages.findAll();
				res.status(200).send({ success: true, item, images });
			}
		} else if (page == "specialoffers") {
			if (section === "section-1") {
				const item = await LaminateWood.findAll();

				res.status(200).send({ success: true, item });
			}
			if (section === "section-2") {
				const item = await Offers.findAll();

				res.status(200).send({ success: true, item });
			}
			if (section === "section-3") {
				const item = await UpcommingOffers.findAll();

				res.status(200).send({ success: true, item });
			}
		} else if (page == "testimonials") {
			if (section === "section-2") {
				const item = await Testimonials.findAll();

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
		const img = req.files[0].filename;
		const { name, content, title, discount, url, role } = req.body;
		if (page == "homepage") {
			if (section == "section-1") {
				if (title && img) {
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
					const items = await WhyChooseSection.update(info, {
						where: { id: id },
					});
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
			if (section === "section-2") {
				if (title && content) {
					info = { title, content };
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
		let img2 = { img };

		if (img) {
			if (page == "whychooseus") {
				if (section === "section-2") {
					const item = await FeatureImages.update(img2, { where: { id: id } });
					const item1 = await FeatureImages.findAll({ where: { id: id } });
					res.status(200).send({ success: true, item, item1 });
				}
				if (section === "section-3") {
					const item = await OurWorkImages.update(img2, { where: { id: id } });
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
		const img = req.files[0].filename;

		if (img) {
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
		}
	} catch (err) {
		console.log(err);
	}
};
module.exports = {
	getSection,
	updateItem,
	deleteContent,
	updateImages,
	getSingleItem,
	getSingleImage,
};
