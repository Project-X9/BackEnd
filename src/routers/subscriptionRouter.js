const express = require('express');
const subscriptionController = require(`./../controllers/subscriptionController`);
const router = new express.Router();

router
.route("/subscribe")
.post(subscriptionController.getCheckoutSession)

module.exports=router;
