const express = require("express");
const Referals = require("../controllers/referals");
const adminAuthenticator = require("../middlewares/adminAuthenticator");

const router = express.Router();

//route for generating and accessing referal code
router.post('/', Referals.generateReferal);
router.put('/:id', adminAuthenticator, Referals.sendReferalEmail)
router.delete('/:id', adminAuthenticator,Referals.deleteReferal)
router.get("/generate-referal-code/:id", Referals.generateReferal);
router.get("/get-all-referals", Referals.getAllReferals);
module.exports = router;
