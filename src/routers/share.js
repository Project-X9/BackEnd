
const express = require("express");
const shareController = require(`./../controllers/shareController`);
const router = new express.Router();


router.route('/').post(shareController);

module.exports = router;