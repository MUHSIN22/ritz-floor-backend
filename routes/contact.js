const express = require("express");
const Contact = require("../controllers/contactMessage");
const adminAuthenticator = require("../middlewares/adminAuthenticator");
const sendEmail = require("../utils/sendMail");


const router = express.Router();

//route for getting all products list
router.get("/get-all-contacts",adminAuthenticator, Contact.getMessages);
router.get("/get-all-estimation",adminAuthenticator, Contact.getEstimation);
router.post("/send-contact-message", Contact.postMessage);
router.post("/free-estimation",Contact.uploadEstimation)


module.exports = router;



