const express = require('express');
const searchController = require(`./../controllers/searchController`);
const router = new express.Router();


router
.route("/track")
.get(searchController.searchTracks);

router
.route("/album")
.get(searchController.searchAlbums);


module.exports = router;
