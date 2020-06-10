const express = require('express');
const subscriptionController = require(`./../controllers/subscriptionController`);
const router = new express.Router();
const auth = require('./../middleware/auth')
router
.route("/subscribe")
.post(auth, subscriptionController.getCheckoutSession)

module.exports=router;
