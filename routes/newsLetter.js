const express = require("express");
const NewsLetter = require("../controllers/newsLetters");

const router = express.Router();

//route for getting all products list
router.get("/get-news-letters", NewsLetter.getNewsLetter);
//route for sending/applying news letter
router.post("/send-news-letter", NewsLetter.sendNewsLetter);
//route for sending/applying news letter
router.delete("/delete-news-letter/:id", NewsLetter.deleteNewsLetter);
module.exports = router;
