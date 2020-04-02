/**---------------------------------------------------ERROR DEFINE API -------------------------------------------------------------------------- */
/**
 * @apiDefine ERROR
 * @apiDescription message a brief description of the error.
 * 
 * @apiError BadRequest The request could not be understood by the server due to malformed syntax. The message body will contain more information; see Response Schema.
 * @apiError Forbidden The server understood the request, but is refusing to fulfill it.
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 
/**---------------------------------------------------------------create a category --------------------------------------------------------------- */

/**
 * @api {post} /browse/category   create a single category 
 * @apiGroup Browse
 * @apiName Create Category
 * @apiVersion 0.1.0
 *
 * 
 * @apiParam {string} href 
 * @apiParam {string} icon 
 * @apiParam {string} name 
 * 
 * @apiParamExample {json} Request-Example:
 * {
 *    "name":"r&b",
 *    "icon":"",
 *    "href":"https://www.ABC.com",
 *    "playlists":[]
 * }
 * 
 * @apiSuccess {Object}    category         category object, 

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "status":"success",
 *       "data":{ "name" : "r&b",
          "href" : "https://www.ABC.com",
          "icon" : "",
          "id" : "5e85fd12bd68be36d86ca316",
          "playlists" : []
          }
        }
 *     
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * 
 *  @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail",
 *             "message": "category is not found"
 *           }
 *     }
 */

 /**---------------------------------------------------------------update a category --------------------------------------------------------------- */
/**
 * @api {patch} /browse/category?=  update a single category 
 * @apiGroup Browse
 * @apiName update a category
 * @apiVersion 0.1.0
 * @apiHeader {string} id  category Id
 * @apiHeaderExample {json} Request-Example:
 *      id       5e85fd12bd68be36d86ca316
 * 
 * @apiParam {string} href 
 * @apiParam {string} icon 
 * @apiParam {string} name 
 * 
 * @apiParamExample {json} Request-Example:
 * {
 *    "name":"blues"
 * }
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "status":"success",
 *       "data":{
                  "name" : "blues",
                  "href" : "https://www.ABC.com",
                  "icons" : "",
                  "id" : "5e85fd12bd68be36d86ca316",
                  "playlists" : []
                }
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

 /**---------------------------------------------------------------get all categories --------------------------------------------------------------- */
/**
 * @api {get} /browse/categories Get all category
 * @apiGroup Browse
 * @apiName get all Categories
 * @apiVersion 0.1.0
 * @apiSuccess {Object}    categories         category objects
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "status":"success",
 *       "data":{ 
 *            "categories":{  
 *                            {
                               "name" : "r&b",
                                "href" : "https://www.ABC.com",
                                "icons" : "",
                                "id" : "5e85fd12bd68be36d86ca316",
                                "playlists" : []
                               },
                                 {
                               "name" : "pop",
                                "href" : "https://www.sf.com",
                                "icons" : "",
                                "id" : "5o85fd12bd30ce36d86ca316",
                                "playlists" : []
 *                            }
 *                          }
          }
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


/**---------------------------------------------------------------get a category --------------------------------------------------------------- */
/**
 * @api {get} /browse/category?=  Get a single category 
 * @apiGroup Browse
 * @apiName get a Category
 * @apiVersion 0.1.0
 * 
 * @apiHeader {string} id   category Id
 * @apiHeaderExample {json} Request-Example:
 *      id       5e85fd12bd68be36d86ca316
 * @apiSuccess {Object}    category         category object
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "status":"success",
 *       "data":{ "name" : "r&b",
          "href" : "https://www.ABC.com",
          "icons" : "",
          "id" : "5e85fd12bd68be36d86ca316",
          "playlists" : []
          }
        }
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail",
 *             "message": "category is not found"
 *           }
 *     }
 */

  /**---------------------------------------------------------------delete a category --------------------------------------------------------------- */
/**
 * @api {delete} /browse/category?=  delete a single category 
 * @apiGroup Browse
 * @apiName delete a category
 * @apiVersion 0.1.0
 * @apiHeader {string} id  category Id
 * @apiHeaderExample {json} Request-Example:
 *      id       5e85fd12bd68be36d86ca316
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "status":"success",
 *       "data":null
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

   /**---------------------------------------------------------------add a playlist to category --------------------------------------------------------------- */
/**
 * @api {post} /browse/categoryPlaylist  delete a single category 
 * @apiGroup Browse
 * @apiName add a playlist to category
 * @apiVersion 0.1.0
 * @apiHeader {string} id   category Id
 * @apiHeader {string} id1  playlist Id
 * 
 * @apiHeaderExample {json} Request-Example:
 *      id       5e85fd12bd68be36d86ca316
 *      id1      5e85fd12bd68be36d86ca352
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
 *             "message": "categories is not found"
 *           }
 *     }
 *     or 
 *     HTTP/1.1 403 Forbidden
 *     {
 *          "error": { 
 *            data : "already exists"
 *           }
 *     }
 */
 

  /**---------------------------------------------------------------remove a playlist to category --------------------------------------------------------------- */
/**
 * @api {post} /browse/categoryPlaylist  delete a single category 
 * @apiGroup Browse
 * @apiName remove a playlist to category
 * @apiVersion 0.1.0
 * @apiHeader {string} id   category Id
 * @apiHeader {string} id1  playlist Id
 * 
 * @apiHeaderExample {json} Request-Example:
 *      id       5e85fd12bd68be36d86ca316
 *      id1      5e85fd12bd68be36d86ca352
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
 *             "message": "categories is not found"
 *           }
 *     }
 *     or 
 *     HTTP/1.1 403 Forbidden
 *     {
 *          "error": { 
 *             data : "invalid deletion"
 *           }
 *     }
 */
 