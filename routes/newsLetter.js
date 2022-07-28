const express = require("express");
const NewsLetter = require("../controllers/newsLetters");
const adminAuthenticator = require("../middlewares/adminAuthenticator");

const router = express.Router();

//route for getting all products list
router.get("/get-news-letters",adminAuthenticator, NewsLetter.getNewsLetter);
//route for sending/applying news letter
router.post("/send-news-letter", NewsLetter.sendNewsLetter);
//route for sending/applying news letter
router.delete("/:id",adminAuthenticator, NewsLetter.deleteNewsLetter);
router.put('/:id',adminAuthenticator, NewsLetter.sendNewsLetterEmail);
module.exports = router;
