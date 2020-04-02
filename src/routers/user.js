const express = require("express");
const userController = require(`./../controllers/userController`);
const router = new express.Router();
const auth = require('../middleware/auth');

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

 router.route("/me")
 .get(auth,userController.getCurrentUser);

router
  .route("/:id")
  .get(auth,userController.getUser)
  .patch(auth,userController.updateUser)
  .delete(auth,userController.deleteUser);


router.route('/:id/tracks')
.get(auth,userController.getTracks);

router.route('/:id/albums')
.get(auth,userController.getAlbums);

// router.route("/:id/top/:type")
// .get(userController.getTopTracksAndAlbums);


//====================  (AUTHENTICATION) Login ======================

router.route('/login')
.post(auth,userController.login);

module.exports = router;
