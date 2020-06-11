const express = require('express');
const subscriptionController = require(`./../controllers/subscriptionController`);
const router = new express.Router();
const auth = require('../middleware/auth');



/**
* @api {get} /subscribe
  * @apiName Get Checkout Session  @apiGroup Subscription
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
router.route("/subscribe")
.get(auth, subscriptionController.getCheckoutSession)

module.exports=router;
