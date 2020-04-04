/**---------------------------------------------------ERROR DEFINE API -------------------------------------------------------------------------- */
/**
 * @apiDefine ERROR
 * @apiDescription message a brief description of the error.
 * 
 * @apiError BadRequest The request could not be understood by the server due to malformed syntax. The message body will contain more information; see Response Schema.
 * @apiError Forbidden The server understood the request, but is refusing to fulfill it.
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.

 
 /**---------------------------------------------------------------get all followers --------------------------------------------------------------- */
/**
 * @api {get} /follow/getfollowers  Get all followers
 * @apiGroup Follow
 * @apiName get all followers
 * @apiVersion 0.2.0
 * 
 * @apiHeader {string} id  user Id
 * @apiHeaderExample {json} Request-Example:
 *      id       5e85fd12bd68be36d86ca316
 *  
 * @apiSuccess {string}    followers         followers ids of a user
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "status":"success",
 *       "followers":[ "5e85fd12bd68be36jb6ca325","5e85fl12bd68be36d86c819" ]
        }

 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail",
 *             "message": "categories is not found"
 *           }
 *     }
 */

 /**---------------------------------------------------------------follow user --------------------------------------------------------------- */
/**
 * @api {patch} /follow/user  follow user
 * @apiGroup Follow
 * @apiName follow user
 * @apiVersion 0.2.0
 * 
 * @apiHeader {string} id  user Id
 * @apiHeader {string} id1  user Id to be followed
 * @apiHeaderExample {json} Request-Example:
 *      id       5e85fd12bd68be36d86ca316
 *      id1      5e85fd12bd68be36d8638cb3
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
 *             "message": "categories is not found"
 *           }
 *     }
 */

/**---------------------------------------------------------------unfollow user --------------------------------------------------------------- */
/**
 * @api {delete} /follow/user  unfollow user
 * @apiGroup Follow
 * @apiName unfollow user
 * @apiVersion 0.2.0
 * 
 * @apiHeader {string} id  user Id
 * @apiHeader {string} id1  user Id to be unfollowed
 * @apiHeaderExample {json} Request-Example:
 *      id       5e85fd12bd68be36d86ca316
 *      id1      5e85fd12bd68be36d8638cb3
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
 * @api {patch} /follow/album  follow album
 * @apiGroup Follow
 * @apiName follow album
 * @apiVersion 0.2.0
 * 
 * @apiHeader {string} id  user Id
 * @apiHeader {string} id1  album Id to be followed
 * @apiHeaderExample {json} Request-Example:
 *      id       5e85fd12bd68be36d86ca316
 *      id1      5e85fd12bd68be36d8638cb3
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
 * @api {delete} /follow/album  unfollow album
 * @apiGroup Follow
 * @apiName unfollow album
 * @apiVersion 0.2.0
 * 
 * @apiHeader {string} id  user Id
 * @apiHeader {string} id1  album Id to be unfollowed
 * @apiHeaderExample {json} Request-Example:
 *      id       5e85fd12bd68be36d86ca316
 *      id1      5e85fd12bd68be36d8638cb3
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
 * @api {patch} /follow/track  follow track
 * @apiGroup Follow
 * @apiName follow track
 * @apiVersion 0.2.0
 * 
 * @apiHeader {string} id  user Id
 * @apiHeader {string} id1  track Id to be followed
 * @apiHeaderExample {json} Request-Example:
 *      id       5e85fd12bd68be36d86ca316
 *      id1      5e85fd12bd68be36d8638cb3
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
 * @api {delete} /follow/track  unfollow track
 * @apiGroup Follow
 * @apiName unfollow track
 * @apiVersion 0.2.0
 * 
 * @apiHeader {string} id  user Id
 * @apiHeader {string} id1  track Id to be unfollowed
 * @apiHeaderExample {json} Request-Example:
 *      id       5e85fd12bd68be36d86ca316
 *      id1      5e85fd12bd68be36d8638cb3
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
 * @api {patch} /follow/artist  follow artist
 * @apiGroup Follow
 * @apiName follow artist
 * @apiVersion 0.2.0
 * 
 * @apiHeader {string} id  user Id
 * @apiHeader {string} id1  artist Id to be followed
 * @apiHeaderExample {json} Request-Example:
 *      id       5e85fd12bd68be36d86ca316
 *      id1      5e85fd12bd68be36d8638cb3
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
 * @api {delete} /follow/artist  unfollow artist
 * @apiGroup Follow
 * @apiName unfollow artist
 * @apiVersion 0.2.0
 * 
 * @apiHeader {string} id  user Id
 * @apiHeader {string} id1  artist Id to be unfollowed
 * @apiHeaderExample {json} Request-Example:
 *      id       5e85fd12bd68be36d86ca316
 *      id1      5e85fd12bd68be36d8638cb3
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
 * @api {patch} /follow/artist  follow playlist
 * @apiGroup Follow
 * @apiName follow playlist
 * @apiVersion 0.2.0
 * 
 * @apiHeader {string} id  user Id
 * @apiHeader {string} id1  playlist Id to be followed
 * @apiHeaderExample {json} Request-Example:
 *      id       5e85fd12bd68be36d86ca316
 *      id1      5e85fd12bd68be36d8638cb3
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
 * @api {delete} /follow/playlist  unfollow playlist
 * @apiGroup Follow
 * @apiName unfollow playlist
 * @apiVersion 0.2.0
 * 
 * @apiHeader {string} id  user Id
 * @apiHeader {string} id1  playlist Id to be unfollowed
 * @apiHeaderExample {json} Request-Example:
 *      id       5e85fd12bd68be36d86ca316
 *      id1      5e85fd12bd68be36d8638cb3
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

