const express = require("express");
const userController = require(`./../controllers/userController`);
const router = new express.Router();

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

// router.route("/me")
// .get(userController.getCurrentUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);


router.route('/:id/tracks')
.get(userController.getTracks);

router.route('/:id/albums')
.get(userController.getAlbums);

// router.route("/:id/top/:type")
// .get(userController.getTopTracksAndAlbums);

module.exports = router;
