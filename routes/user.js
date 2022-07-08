const express = require("express");
const getAllUser = require("../controllers/userController");
const textTestimonail = require("../controllers/textTestimonial");

const router = express.Router();

//route for getting all all list
router.get("/get-all-users", getAllUser.getAllUser);
router.post("/add-user", getAllUser.addUser);
router.post("/login-user", getAllUser.loginUser);

//route for deleting user
router.delete("/delete_user/:id", getAllUser.deleteUser);

//route for contact-message

router.get("/get-single-user/:id", getAllUser.getSingleUser);

module.exports = router;
