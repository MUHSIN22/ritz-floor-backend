const express = require("express");
const Contact = require("../controllers/contactMessage");
const adminAuthenticator = require("../middlewares/adminAuthenticator");
const sendEmail = require("../utils/sendMail");


const router = express.Router();

//route for getting all products list
router.get("/get-all-contacts",adminAuthenticator, Contact.getMessages);
router.post("/send-contact-message", Contact.postMessage);


module.exports = router;


