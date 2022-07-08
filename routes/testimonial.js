const express = require("express");
const testimonial = require("../controllers/textTestimonial");

const router = express.Router();

//route for text-testimonials
router.get("/get-all-text-testimonials", testimonial.getAllTextTestimonials);
router.post("/add-text-testimonials", testimonial.addTextTestimonials);

module.exports = router;
