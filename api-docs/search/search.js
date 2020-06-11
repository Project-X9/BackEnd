/**
 * 
 * @api {get} /{search}/track||artist
 * @apiGroup Search 
 * @apiVersion  0.1.0
 * @apiDescription Get ProjectX information about artists, tracks
 * 
 * @apiUse HeaderAuth
 * @apiParam  {String} q Required. Search query keywords.
 * @apiParam  {Number} limit Optional. Maximum number of results to return. Default:20 Minimum:1 Maximum: 50.
 * @apiParam  {Number} page Optional. Optional.The index of the first result to return. Default: 0 (the first result). Maximum offset (including limit): 2,000. Use with limit to get the next page of search results.
 * 
 * 
 * 
 * 
 * 
 * @apiSuccess (200) {JSON} profile User The response body contains an array of artist objects, simplified album objects, and/or track objects wrapped in a paging object in JSON.
 * 
 * 
 * 
 * @apiSuccessExample {JSON} Success-Response:
 * HTTP/1.1 OK
 * {
 *  
 *     "artists":[{
 *           "name": "Sean",
 *           "id": "131jlk12312312",
 *           ....
 *          
 * }]
 *       
 * }
 * 
 * @apiUse Error404
 * @apiUse Error400
 * 
 * 
 */




