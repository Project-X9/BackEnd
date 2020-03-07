/**
 * 
 * @api {get} /me/albums/contains Check User's Saved Albums
 * @apiName checkSavedAlbums
 * @apiGroup Library
 * @apiVersion  0.1.0
 * @apiDescription Check if one or more albums is already saved in the current ProjectX user’s ‘Your Music’ library.
 * 
 * @apiUse HeaderAuth
 * @apiParam  {JSON} ids 	Required. A comma-separated list of the ProjectX IDs for the albums. Maximum: 50 IDs.
 * 
 * 
 * 
 * @apiParamExample  {JSON} Request-Example:
 * {
 *     "ids": ["id_1", "id_2", ..., "id_20"]
 * }
 * 
 * @apiSuccess (Success 200) {JSON} results JSON array of true/false values.
 * @apiUse Error404
 * @apiUse Error400
 * 
 */
/////////////////////////////////
function checkSavedAlbums(){
    return;
}



/**
 * 
 * @api {get} /me/tracks/contains Check User's Saved Tracks
 * @apiName checkSavedTracks
 * @apiGroup Library
 * @apiVersion  0.1.0
 * @apiDescription Check if one or more tracks is already saved in the current ProjectX user’s ‘Your Music’ library.
 * 
 * @apiUse HeaderAuth
 * @apiParam  {JSON} ids 	Required. A comma-separated list of the ProjectX IDs for the albums. Maximum: 50 IDs.
 * 
 * 
 * 
 * @apiParamExample  {JSON} Request-Example:
 * {
 *     "ids": ["id_1", "id_2", ..., "id_20"]
 * }
 * 
 * @apiSuccess (Success 200) {JSON} results JSON array of true/false values.
 *@apiUse Error404
* @apiUse Error400
 */
//////////////////////////////
function checkSavedTracks(){
    return;
}


/**
 * 
 * @api {get} /me/albums Get User's Saved Albums
 * @apiName getSavedAlbums
 * @apiGroup Library
 * @apiVersion  0.1.0
 * @apiDescription Get a list of the albums saved in the current ProjectX user’s ‘Your Music’ library.
 * 
 * @apiUse HeaderAuth
 * @apiParam  {String} limit Optional. The maximum number of objects to return. Default: 20. Minimum: 1. Maximum: 50.
 * @apiParam  {Integer} offset Optional. The index of the first object to return. Default: 0 (i.e., the first object). Use with limit to get the next set of objects.
 * 
 * @apiSuccess (Success 200) {JSON} albums An array of album objects (wrapped in a paging object) in JSON format.
 *
* @apiUse Error400
 */
//////////////////////////////
function getSavedAlbums(){
   return;
}



/**
 * 
 * @api {get} /me/tracks Get User's Saved Tracks
 * @apiName getSavedTracks
 * @apiGroup Library
 * @apiVersion  0.1.0
 * @apiDescription Get a list of the tracks saved in the current ProjectX user’s ‘Your Music’ library.
 * 
 * @apiUse HeaderAuth
 * @apiParam  {String} limit Optional. The maximum number of objects to return. Default: 20. Minimum: 1. Maximum: 50.
 * @apiParam  {Integer} offset Optional. The index of the first object to return. Default: 0 (i.e., the first object). Use with limit to get the next set of objects.
 * 
 * @apiSuccess (Success 200) {JSON} tracks An array of track objects (wrapped in a paging object) in JSON format.
 * 
* @apiUse Error400
 */
//////////////////////////////
function getSavedTracks(){
   return;
}




/**
* 
* @api {delete} /me/albums Remove User's Saved Albums
* @apiName removeAlbums
* @apiGroup Library
* @apiVersion  0.1.0
* @apiDescription Remove one or more albums from the current user’s ‘Your Music’ library.
* 
* @apiUse HeaderAuth
* @apiParam  {JSON} ids A JSON array of ids of albums to be removed.
* 
* @apiSuccess (Success 200) {String} remove_albums_success 
* @apiUse Error404
* @apiUse Error400
*/
//////////////////////////////
function removeSavedAlbums(){
    return;
}




/**
* 
* @api {delete} /me/tracks Remove User's Saved Tracks
* @apiName removeTracks
* @apiGroup Library
* @apiVersion  0.1.0
* @apiDescription Remove one or more tracks from the current user’s ‘Your Music’ library. 
*
* @apiUse HeaderAuth
* @apiParam  {JSON} ids A JSON array of ids of tracks to be removed.
* 
* @apiSuccess (Success 200) {String} remove_tracks_success 
* 
* @apiUse Error404
* @apiUse Error400
*/
//////////////////////////////
function removeSavedTracks(){
   return;
}



/**
* 
* @api {put} /me/albums Save Albums for Current User
* @apiName saveAlbums
* @apiGroup Library
* @apiVersion  0.1.0
* @apiDescription Save one or more albums to the current user’s ‘Your Music’ library.
*
* @apiUse HeaderAuth
* @apiParam  {String} ids A JSON array of ids of albums to be saved.
* 
* @apiSuccess (Success 201) {String} save_albums_success 
* 
* @apiUse Error404
* @apiUse Error400
*/
//////////////////////////////
function saveAlbums(){
    return;
}


/**
* 
* @api {put} /me/tracks Save Tracks for Current User
* @apiName saveTracks
* @apiGroup Library
* @apiVersion  0.1.0
* @apiDescription Save one or more tracks to the current user’s ‘Your Music’ library. 

* @apiUse HeaderAuth
* @apiParam  {String} ids A JSON array of ids of albums to be saved.
* 
* @apiSuccess (Success 201) {String} save_tracks_success 
* 
* @apiUse Error404
* @apiUse Error400
*/
//////////////////////////////
function saveAlbums(){
   return;
}