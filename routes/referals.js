const express = require("express");
const Referals = require("../controllers/referals");

const router = express.Router();

//route for generating and accessing referal code
router.get("/generate-referal-code/:id", Referals.generateReferal);
router.get("/get-all-referals", Referals.getAllReferals);

module.exports = router;
