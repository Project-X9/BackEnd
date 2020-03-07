/**
 * 
 * @api {get} /{search}
 * @apiGroup Search 
 * @apiVersion  0.1.0
 * @apiDescription Get ProjectX information about artists, albums, tracks or playlists that match a keyword string.
 * 
 * @apiUse HeaderAuth
 * @apiParam  {String} q Required. Search query keywords
 * @apiParam  {String} type Required. item types to search across.
 * @apiParam  {Number} limit Optional. Maximum number of results to return. Default:20 Minimum:1 Maximum: 50.
 * @apiParam  {Number} offset Optional. Optional.The index of the first result to return. Default: 0 (the first result). Maximum offset (including limit): 2,000. Use with limit to get the next page of search results.
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
 *     "artists":{
 *          items:[{
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




