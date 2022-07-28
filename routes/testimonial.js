const express = require("express");
const testimonial = require("../controllers/textTestimonial");
const adminAuthenticator = require("../middlewares/adminAuthenticator");

const router = express.Router();

//route for text-testimonials
router.get("/get-all-text-testimonials", testimonial.getAllTextTestimonials);
router.post("/add-text-testimonials", adminAuthenticator, testimonial.addTextTestimonials);
router.delete(
	"/delete-text-testimonials/:id",
	adminAuthenticator,
	testimonial.deleteTextTestimonial
);

module.exports = router;
