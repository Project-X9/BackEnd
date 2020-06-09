const express = require("express");
const userController = require(`./../controllers/userController`);
const router = new express.Router();
const auth = require('../middleware/auth');

router
  .route("/deletedplaylist/:id")
  .get(userController.getDeletedPlaylists);
 router
   .route("/Queue/:id")
//   .get(userController.getQueue);
router
  .route("/recoverPlaylist/:id")
  .patch(userController.recoverPlaylist);

router
  .route("/SignUp")
  .post(userController.SignUp);

router
  .route("/confirmation/:token")
  .patch(userController.confirmation);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

 router.route("/me")
 .get(userController.getCurrentUser);

router
  .route("/:id")
  .get(auth,userController.getUser)
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

router.route('/:id/notifications')
.get(userController.getNotifications)
.delete(userController.deleteNotifications)

router.route('/:userId/notifications/:notificationId')
.patch(userController.updateNotification)

router.route('/:id/update-push')
.post(userController.updatePushSubscription);

router.route('/:id/share-track')
.post(userController.shareTrack)



//====================  (AUTHENTICATION) Login ======================

router.route('/login')
.post(userController.login);


module.exports = router;

router.route('/reset')
.post(userController.forgetPassword);
