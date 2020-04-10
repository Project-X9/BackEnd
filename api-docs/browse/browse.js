/**---------------------------------------------------------------create a category --------------------------------------------------------------- */

/**
 * @api {post} /browse/category   create a single category 
 * @apiGroup Browse
 * @apiName Create Category
 * @apiVersion 0.2.0
 *
 * @apiParam {string} name  (required)
 * @apiParam {string} href 
 * @apiParam {string} icon  
 * 
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
 * @api {patch} /browse/category/:id  update a single category 
 * @apiGroup Browse
 * @apiName update a category
 * @apiVersion 0.2.0
 * @apiHeader {string} id  category Id in path
 * @apiParamExample {json} PathParameter-Example:
 *     /browse/category/5e89fc634cd1d420fc309234
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
 * @apiVersion 0.2.0
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
 * @api {get} /browse/category/:id  Get a single category 
 * @apiGroup Browse
 * @apiName get a Category
 * @apiVersion 0.3.0
 * 
 * @apiHeader {string} id  category Id in path
 * @apiParamExample {json} PathParameter-Example:
 *     /browse/category/5e89fc634cd1d420fc309234
 * 
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
 * @api {delete} /browse/category/:id  delete a single category 
 * @apiGroup Browse
 * @apiName delete a category
 * @apiVersion 0.3.0
 * @apiHeader {string} id  category Id in path
 * @apiParamExample {json} PathParameter-Example:
 *     /browse/category/5e89fc634cd1d420fc309234
 * 
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
 * @api {patch} /browse/categoryPlaylist/:id  add a playlist to category
 * @apiGroup Browse
 * @apiName add a playlist to category
 * @apiVersion 0.3.0
 * @apiParam {string} id  category Id in body
 * @apiHeader {string} id  playlist Id to be followed in path
 * @apiParamExample {json} bodyParameter-Example:
 *      {
	       "id":"5e89fc634cd1d420fc3096c0"
        }
 * @apiParamExample {json} PathParameter-Example:
 *     /browse/categoryplaylist/5e89fc634cd1d420fc309234
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
 * @api {patch} /browse/categoryPlaylist/un/:id  remove a playlist to category
 * @apiGroup Browse
 * @apiName remove a playlist to category
 * @apiVersion 0.3.0
 * 
 * @apiParam {string} id  category Id in body
 * @apiHeader {string} id  playlist Id to be followed in path
 * @apiParamExample {json} bodyParameter-Example:
 *      {
	       "id":"5e89fc634cd1d420fc3096c0"
        }
 * @apiParamExample {json} PathParameter-Example:
 *     /browse/categoryplaylist/un/5e89fc634cd1d420fc309234
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
 