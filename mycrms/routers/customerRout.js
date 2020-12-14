const express = require("express");
const router = express.Router();
const controller = require("../controllers/customerController");


router
.route("/")
.post(controller.createNewCustomer);


router
.route("/:id")
.delete(controller.deleteCustomer)
.patch(controller.updateCustomerDetails);

router
.route("/table")
.get(controller.showCustomers)





module.exports = router;