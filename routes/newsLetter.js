const express = require("express");
const NewsLetter = require("../controllers/newsLetters");

const router = express.Router();

//route for getting all products list
router.get("/get-news-letters", NewsLetter.getNewsLetter);

module.exports = router;
