const express = require('express');
const router = express.Router();
const controler = require("../controllers/userController");
const logInControler = require("../controllers/userLogin");

router
.route('/')
.post(controler.createUser)
// .get(controler.getUser) - probebly for email validation

router
.route('/login')
.post(logInControler.logInUser);

router
.route('/check-email')
.post(controler.checkEmail);











router
.route("/:id")
// .delete(controler.createUser)
// .patch(controler.updateData);






module.exports = router;