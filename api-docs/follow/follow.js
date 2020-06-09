/**---------------------------------------------------------------get all followers --------------------------------------------------------------- */
/**
 * @api {get} /follow/getfollowers  Get all followers
 * @apiGroup Follow
 * @apiName get all followers
 * @apiVersion 0.3.0
 * 
 * @apiParam {string} id  user Id
 * @apiParamExample {json} bodyParameter-Example:
 *      {
	       "id":"5e89fc634cd1d420fc3096c0"
        }
 *  
 * @apiSuccess {string[]}    followers         followers ids of a user
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
              "status": "success",
              "followers": [
                     "5e8643edd411aa54c0357fbd",
                     "5e89fc7eb586021c3869f63e"
              ]
       }

 * @apiError NotFound The requested resource could not be found. 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail",
 *             "message": "Cannot read property 'followers' of null"
 *           }
 *     }
 */

 /**---------------------------------------------------------------follow user --------------------------------------------------------------- */
/**
 * @api {patch} /follow/user/:id  follow user
 * @apiGroup Follow
 * @apiName follow user
 * @apiVersion 0.3.0
 * 
 * @apiParam {string} id  user Id in body
 * @apiHeader {string} id  user Id to be followed in path
 * @apiParamExample {json} bodyParameter-Example:
 *      {
	       "id":"5e89fc634cd1d420fc3096c0"
        }
       
 * @apiParamExample {json} PathParameter-Example:
 *     /follow/user/5e89fc634cd1d420fc309234
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "status":"success"
        }
        
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail",
 *             "message": "user is not found"
 *           }
 *     }
 */

/**---------------------------------------------------------------unfollow user --------------------------------------------------------------- */
/**
 * @api {patch} /follow/user/un/:id  unfollow user
 * @apiGroup Follow
 * @apiName unfollow user
 * @apiVersion 0.3.0
 * 
 * @apiParam {string} id  user Id in body
 * @apiHeader {string} id  user Id to be unfollowed in path
 * @apiParamExample {json} bodyParameter-Example:
 *      {
	       "id":"5e89fc634cd1d420fc3096c0"
        }
       
 * @apiParamExample {json} PathParameter-Example:
 *     /follow/user/5e89fc634cd1d420fc309234
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "status":"success"
        }
        
 * @apiError Forbidden The server understood the request, but is refusing to fulfill it.
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail",
 *             "message": "user is not found"
 *           }
 *     }
 *     or 
 *     HTTP/1.1 403 Forbidden
 *     {
 *          "error": { 
 *            data : "invalid deletion"}
 *           }
 *     }
 */

/**---------------------------------------------------------------follow album --------------------------------------------------------------- */
/**
 * @api {patch} /follow/album/:id  follow album
 * @apiGroup Follow
 * @apiName follow album
 * @apiVersion 0.3.0
 * 
 * @apiParam {string} id  user Id in body
 * @apiHeader {string} id  album Id to be followed in path
 * @apiParamExample {json} bodyParameter-Example:
 *      {
	       "id":"5e89fc634cd1d420fc3096c0"
        }
       
 * @apiParamExample {json} PathParameter-Example:
 *     /follow/album/5689fc632cd1d420fc3097a2
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "status":"success"
        }
        
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail",
 *             "message": "album is not found"
 *           }
 *     }
 */

/**---------------------------------------------------------------unfollow album --------------------------------------------------------------- */
/**
 * @api {patch} /follow/album/un/:id  unfollow album
 * @apiGroup Follow
 * @apiName unfollow album
 * @apiVersion 0.3.0
 * 
 *  @apiParam {string} id  user Id in body
 *  @apiHeader {string} id  album Id to be unfollowed in path
 * @apiParamExample {json} bodyParameter-Example:
 *      {
	       "id":"5e89fc634cd1d420fc3096c0"
        }
       
 * @apiParamExample {json} PathParameter-Example:
 *     /follow/album/5689fc632cd1d420fc3097a2
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "status":"success"
        }
        
 * @apiError Forbidden The server understood the request, but is refusing to fulfill it.
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail",
 *             "message": "album is not found"
 *           }
 *     }
 *     or 
 *     HTTP/1.1 403 Forbidden
 *     {
 *          "error": { 
 *            data : "invalid deletion"}
 *           }
 *     }
 */
 
/**---------------------------------------------------------------follow track --------------------------------------------------------------- */
/**
 * @api {patch} /follow/track/:id  follow track
 * @apiGroup Follow
 * @apiName follow track
 * @apiVersion 0.3.0
 * 
 * @apiParam {string} id  user Id in body
 * @apiHeader {string} id  track Id to be followed in path
 * @apiParamExample {json} bodyParameter-Example:
 *      {
	       "id":"5e89fc634cd1d420fc3096c0"
        }
       
 * @apiParamExample {json} PathParameter-Example:
 *     /follow/track/5e85fd12bd68be36d8638cb3
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "status":"success"
        }
        
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail",
 *             "message": "track is not found"
 *           }
 *     }
 */

/**---------------------------------------------------------------unfollow track --------------------------------------------------------------- */
/**
 * @api {patch} /follow/track/un/:id  unfollow track
 * @apiGroup Follow
 * @apiName unfollow track
 * @apiVersion 0.3.0
 * 
 * @apiParam {string} id  user Id in body
 * @apiHeader {string} id  track Id to be unfollowed in path
 * @apiParamExample {json} bodyParameter-Example:
 *      {
	       "id":"5e89fc634cd1d420fc3096c0"
        }
       
 * @apiParamExample {json} PathParameter-Example:
 *     /follow/track/5e85fd12bd68be36d8638cb3
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "status":"success"
        }
        
 * @apiError Forbidden The server understood the request, but is refusing to fulfill it.
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail",
 *             "message": "track is not found"
 *           }
 *     }
 *     or 
 *     HTTP/1.1 403 Forbidden
 *     {
 *          "error": { 
 *            data : "invalid deletion"}
 *           }
 *     }
 */


/**---------------------------------------------------------------follow artist --------------------------------------------------------------- */
/**
 * @api {patch} /follow/artist/:id   follow artist
 * @apiGroup Follow
 * @apiName follow artist
 * @apiVersion 0.3.0
 * 
 * 
 * @apiParam {string} id  user Id in body
 * @apiHeader {string} id  artist Id to be followed in path
 * @apiParamExample {json} bodyParameter-Example:
 *      {
	       "id":"5e89fc634cd1d420fc3096c0"
        }
       
 * @apiParamExample {json} PathParameter-Example:
 *     /follow/artist/5e85fd12bd68be36d86ca316
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "status":"success"
        }
        
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail",
 *             "message": "artist is not found"
 *           }
 *     }
 */

/**---------------------------------------------------------------unfollow artist --------------------------------------------------------------- */
/**
 * @api {patch} /follow/artist/un/:id   unfollow artist
 * @apiGroup Follow
 * @apiName unfollow artist
 * @apiVersion 0.3.0
 * 
 * @apiParam {string} id  user Id in body
 * @apiHeader {string} id  artist Id to be unfollowed in path
 * @apiParamExample {json} bodyParameter-Example:
 *      {
	       "id":"5e89fc634cd1d420fc3096c0"
        }
       
 * @apiParamExample {json} PathParameter-Example:
 *     /follow/artist/5e85fd12bd68be36d86ca316
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "status":"success"
        }
        
 * @apiError Forbidden The server understood the request, but is refusing to fulfill it.
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail",
 *             "message": "artist is not found"
 *           }
 *     }
 *     or 
 *     HTTP/1.1 403 Forbidden
 *     {
 *          "error": { 
 *            data : "invalid deletion"}
 *           }
 *     }
 */





  
/**---------------------------------------------------------------follow playlist --------------------------------------------------------------- */
/**
 * @api {patch} /follow/artist/:id   follow playlist
 * @apiGroup Follow
 * @apiName follow playlist
 * @apiVersion 0.3.0
 * 
 * @apiParam {string} id  user Id in body
 * @apiHeader {string} id  playlist Id to be followed in path
 * @apiParamExample {json} bodyParameter-Example:
 *      {
	       "id":"5e89fc634cd1d420fc3096c0"
        }
       
 * @apiParamExample {json} PathParameter-Example:
 *     /follow/playlist/5e85fd12bd68be36d8638cb3
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "status":"success"
        }
        
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail",
 *             "message": "playlist is not found"
 *           }
 *     }
 */

/**---------------------------------------------------------------unfollow playlist --------------------------------------------------------------- */
/**
 * @api {patch} /follow/playlist/un/:id unfollow playlist
 * @apiGroup Follow
 * @apiName unfollow playlist
 * @apiVersion 0.3.0
 * 
 * @apiParam {string} id  user Id in body
 * @apiHeader {string} id  playlist Id to be unfollowed in path
 * @apiParamExample {json} bodyParameter-Example:
 *      {
	       "id":"5e89fc634cd1d420fc3096c0"
        }
       
 * @apiParamExample {json} PathParameter-Example:
 *     /follow/playlist/5e85fd12bd68be36d8638cb3
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "status":"success"
        }
        
 * @apiError Forbidden The server understood the request, but is refusing to fulfill it.
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail",
 *             "message": "playlist is not found"
 *           }
 *     }
 *     or 
 *     HTTP/1.1 403 Forbidden
 *     {
 *          "error": { 
 *            data : "invalid deletion"}
 *           }
 *     }
 */


 /**---------------------------------------------------------------add to Queue --------------------------------------------------------------- */
/**
 * @api {patch} /follow/Queue/:id   add to Queue
 * @apiGroup Follow
 * @apiName add to queue 
 * @apiVersion 0.1.0
 * 
 * @apiParam {string} id  user Id in body
 * @apiHeader {string} id  playlist Id to be added to queue in path
 * @apiParamExample {json} bodyParameter-Example:
 *      {
	       "id":"5e89fc634cd1d420fc3096c0"
        }
       
 * @apiParamExample {json} PathParameter-Example:
 *     /follow/Queue/5e85fd12bd68be36d8638cb3
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "status":"success"
        }
        
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail"
 *           }
 *     }
 */


 
 /**---------------------------------------------------------------remove from Queue --------------------------------------------------------------- */
/**
 * @api {patch} /follow/Queue/un/:id   remove from Queue
 * @apiGroup Follow
 * @apiName remove from queue 
 * @apiVersion 0.1.0
 * 
 * @apiParam {string} id  user Id in body
 * @apiHeader {string} id  playlist Id to be removed from queue in path
 * @apiParamExample {json} bodyParameter-Example:
 *      {
	       "id":"5e89fc634cd1d420fc3096c0"
        }
       
 * @apiParamExample {json} PathParameter-Example:
 *     /follow/Queue/un/5e85fd12bd68be36d8638cb3
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "status":"success"
        }
        
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail"
 *           }
 *     }
 */