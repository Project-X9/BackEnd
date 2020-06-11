const express = require("express");
const userController = require(`./../controllers/userController`);
const router = new express.Router();
const auth = require('../middleware/auth');


router
  .route("/deletedplaylist")
  .get(userController.getDeletedPlaylists);

 router
   .route("/Queue/:id")
   .get(userController.getQueue);
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

router.route('/Track/Ex/:id')
.get(userController.isTrackExists)

router.route('/:id/tracks/:trackId')
.delete(userController.deleteTracks);


router.route('/:id/albums')
.get(userController.getAlbums)
// .put(userController.addAlbums);

router.route('/:id/tracks/:albumId')
.delete(userController.deleteAlbums);






router.route('/me/notifications')
/**
* @api {get} /me/notifications Gets the user's notifications
  * @apiName Get Notifications @apiGroup User Profile
  * @apiVersion  0.1.0
  * @apiUse HeaderAuth
  * @apiSuccess (200) {JSON} JSON Object that contains the notifications
 * @apiSuccessExample {JSON} Success-Response:
 * HTTP/1.1 OK
 * { 
 * "status": "success",
    "totalCount": 17,
    "page": 1,
    "count": 10,
    "data": {
        "notifications": [
            {
                "_id": "5ed8fcd9f8894654ac2ff1b6",
                "event": "share-song",
                "senderId": "5ed1a2a703229411d450a082",
                "trackId": "5e86459124471028e4d3539b",
                "albumId": "5e86459124471028e4d3539b",
                "read": true
            }
          ]
        }
      }
    }
* @apiUse Error404
*/
.get(auth, userController.getNotifications)
/**
* @api {delete} /me/notifications Deletes all the user's notifications
  * @apiName Delete Notifications @apiGroup User Profile
  * @apiVersion  0.1.0
  * @apiUse HeaderAuth
  * @apiSuccess (204) 
 *@apiUse Error404
*/
.delete(auth, userController.deleteNotifications)


/**
* @api {patch} /me/notifications/:notificationId Updates the notification 'read' field
  * @apiName Update Notification  @apiGroup User Profile
  * @apiVersion  0.1.0
  * @apiUse HeaderAuth
 * @apiParam  {Boolean} read 
  * @apiSuccess (201) {JSON} JSON Object that contains the notification object after update
 * @apiSuccessExample {JSON} Success-Response:
 * HTTP/1.1 OK
 * {
    "status": "success",
    "notification": {
        "_id": "5ed8fcd9f8894654ac2ff1b6",
        "event": "share-song",
        "senderId": "5ed1a2a703229411d450a082",
        "trackId": "5e86459124471028e4d3539b",
        "albumId": "5e86459124471028e4d3539b",
        "read": true
    }
}
* @apiUse Error404
*/
router.route('/me/notifications/:notificationId')
.patch(auth, userController.updateNotification)


/**
* @api {post} /me/update-push Updates the pushSubscription field of the authenticated User
  * @apiName Update Push Subscription  @apiGroup User Profile
  * @apiVersion  0.1.0
  * @apiUse HeaderAuth
 * @apiParam  {subscription} pushSubscription 
  * @apiSuccess (200) {JSON} JSON Object that contains the user after updating 'pushSubscription' field
* @apiUse Error404
*/
router.route('/me/update-push')
.post(auth, userController.updatePushSubscription)
/**
* @api {delete} /me/delete-push Deletes the pushSubscription of the authenticated User
  * @apiName Delete Push Subscription  @apiGroup User Profile
  * @apiVersion  0.1.0
  * @apiUse HeaderAuth
 * @apiParam  {subscription} pushSubscription 
  * @apiSuccess (204)
* @apiUse Error404
*/
router.route('/me/delete-push')
.delete(auth, userController.deletePushSubscription);



//====================  (AUTHENTICATION) Login ======================

router.route('/login')
.post(userController.login);


module.exports = router;

router.route('/reset')
.post(userController.forgetPassword);
