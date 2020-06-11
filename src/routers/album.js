const express = require('express');
const router = new express.Router();

const AController = require(`./../controllers/albumController`); 



router
    .route("/:id")
    .get(AController.getAlbumById)
    .patch(AController.uploadAlbumPhoto);

router
    .route("/statistics/:id")
     /**
    * @api {get} /statistics/:id Gets the statistics of the album with the specified id 
    * @apiName getAlbumStatistics @apiGroup Album
    * @apiVersion  0.1.0
    * @apiSuccess (200) {JSON} JSON Object that contains : Number of listeners & Number of likes 
    * @apiSuccessExample {JSON} Success-Response:
    * HTTP/1.1 OK
    * { 
    *    "status": "success",
        "data":
        {
            "Number of listeners " :22,
            "Number of likes ": 10 ,
        
        }
    * }
    * @apiUse Error404
    */
        .get(AController.getAlbumStatistics);

router
    .route("/:id/tracks")
    .get(AController.getAlbumTracks);

module.exports = router;
