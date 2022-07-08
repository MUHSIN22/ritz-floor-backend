const express = require("express");
const Contact = require("../controllers/contactMessage");

const router = express.Router();

//route for getting all products list
router.get("/get-all-contacts", Contact.getMessages);
router.post("/send-contact-message", Contact.postMessage);

module.exports = router;
