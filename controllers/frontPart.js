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

module.exports = {
    getSectionData : async (req,res) => {
        try{
            const {page,section} = req.params;
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
                    const items = await OurWorks.findAll();
                    res.status(200).send({ success: true, items });
                }
            } else if (page == "specialoffers") {
                if (section === "section-1") {
                    const item = await LaminateWood.findAll();
    
                    res.status(200).send({ success: true, items : item });
                }
                if (section === "section-2") {
                    const items = await Offers.findAll();
    
                    res.status(200).send({ success: true, items });
                }
                if (section === "section-3") {
                    const items = await UpcommingOffers.findAll();
    
                    res.status(200).send({ success: true, items });
                }
            } else if (page == "testimonials") {
                if (section === "section-2") {
                    const item = await Testimonials.findAll();
    
                    res.status(200).send({ success: true, item });
                }
                if (section === "section-3") {
                    const items = await VideoTestimonials.findAll();
    
                    res.status(200).send({ success: true, items });
                }
            }
        }catch(err){
            res.status(400).send({success:false,message:"Something went wrong!"})
        }
    }
}