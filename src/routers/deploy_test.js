const express = require('express');
const router = new express.Router();

router
  .route("/")
  .get((req,res) => {
      res.status(200).json({message : "hello"})
  });

module.exports = router;