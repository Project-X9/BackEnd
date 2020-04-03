const express = require("express");
const userController = require(`./../controllers/userController`);
const router = new express.Router();
const auth = require('../middleware/auth');

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

 router.route("/me")
 .get(userController.getCurrentUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router.route('/:id/tracks')
.get(userController.getTracks)
// .put(userController.addTracks);

router.route('/:id/tracks/:trackId')
.delete(userController.deleteTracks);


router.route('/:id/albums')
.get(userController.getAlbums)
// .put(userController.addAlbums);

router.route('/:id/tracks/:albumId')
.delete(userController.deleteAlbums);

// router.route("/:id/top/:type")
// .get(userController.getTopTracksAndAlbums);


//====================  (AUTHENTICATION) Login ======================

router.route('/login')
.post(userController.login);

module.exports = router;
