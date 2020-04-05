// ------------------------------------------------------------------------------------------
// Object: PlayList
// ------------------------------------------------------------------------------------------

/**
 * @apiDefine PlayList
 * @apiVersion 0.1.0
 * 
 * @apiSuccess {String} _id The playlist ID Number.
 * @apiSuccess {String} name The playlist's name.
 * @apiSuccess {String} author The user ID Number of the user who created the playlist.
 * @apiSuccess {String[]} trackIds The IDs of all the track in this playlist
 * @apiSuccess {String} description The playlist description.
 * @apiSuccess {String} image A HTTP-based URL pointing to the icon image pf the palylist.
 * @apiSuccess {Boolean} Is_Private Indecation to if this playlist a private one ust for the user or it can be vied by other users.
 * @apiSuccess {String[]} followers The IDs of all the followers of this playlist
 * 
 *  @apiSuccessExample {json} Success-Response:
 *     {
 *      "_id":12345
 *      "name": "Todays Hits",
 *      "tracksIds":[2563A242121 , 33FG726443],
 *      "description": "A playlist that contains all the new hits you would like to hear",
 *      "image":"https://images.squarespace-cdn.com/content/v1/587d4a02bebafb893ba07d90/1484886557050-V261JTTHHGX0O3KHW5OX/ke17ZwdGBToddI8pDm48kGfiFqkITS6axXxhYYUCnlRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxQ1ibo-zdhORxWnJtmNCajDe36aQmu-4Z4SFOss0oowgxUaachD66r8Ra2gwuBSqM/ui-ux-playlist-gen-icon.png",
 *      "Is_Private":false,
 *      "author": 3RT9056,
 *      "followers": [385437856CX3 , 93QT832948]
 *     }
 *  
 */
 
// ------------------------------------------------------------------------------------------
// Current Errors.
// ------------------------------------------------------------------------------------------
/** 
* @apiUse Error404
* @apiUse Error400
*/

// /**
//  * @apiDefine CreatePlayListError
//  * @apiVersion 0.1.0
//  *
//  * @apiError NoModificationRight Only authenticated Users can modify the data
//  *
//  * @apiErrorExample  Response (example):
//  *     HTTP/1.1 400 Bad Request
//  *     {
//  *       "error": "You don't have the authority to modify this playlist"
//  *     }
//  */

// ------------------------------------------------------------------------------------------
// Current Permissions.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine private User access rights needed.
 * Optionally you can write here further Informations about the permission. To be modified later
 *
 *
 * @apiVersion 0.1.0
 */



// ------------------------------------------------------------------------------------------
//     Managing the playLists
// ------------------------------------------------------------------------------------------

// CREATE PLAYLIST :
/**
 * @api {post} /playlist To creat a new playlist
 * @apiVersion 0.1.0
 * @apiName Create PlayList
 * @apiGroup PlayList
 * 
 *  @apiDescription Create new playlist by a specific user.
 * 
 *  @apiSuccess (200) {Object} Playlist Object in JSON format is returned .
 * 
 * @apiSuccessExample {Object} Success-Response:
 * HTTP/1.1 OK
 * {
 *     "_id":1234RY5
 *     "name": "Gym Hits",
 *     "description": "A playlist that contains all the new hits you would like to hear",     
 *      ...
 * }
 * 
 * @apiUse Error404
 * @apiUse Error400
 */



// GET ALL TRACKS :
/**
 * @api {get} /{PlayList_ID}/tracks   Returns an array with the IDs of all the tracks in the playlist
 * @apiVersion 0.1.0
 * @apiName Get playlist tracks
 * @apiGroup PlayList 
 * 
 * @apiSampleRequest localhost:3000/playlists/PlayList_ID/Tracks.json
 *
 * @apiParam {String} PlayList_ID  The Spotify ID of the playlist.
 * 
 * @apiSuccess {Object} Tracks  Track objects in the playlist
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *         description : "A 2016 pop track realesed as a part of the top selling ablum of that year by Wegz ",
 *         followers : [HY668WI9, YPQ0038Z],
 *         name : "Honey",
 *          ...
 *     }
 *
 * @apiUse Error404
 * @apiUse Error400
 */


//GET PLAYLIST BY ID:

 /**
 * @api {get} /me/{PlayList_ID} Get playlist by id
 * @apiVersion 0.1.0
 * @apiName Get PlayList
 * @apiGroup PlayList
 * 
 *  @apiDescription Gets a specific playlist by its ID.
 *  @apiParam {String} Id The ID of the required playlist.
 *  @apiSuccess (200) {Object} Playlist Object in JSON format is returned .
 * 
 * @apiSuccessExample {Object} Success-Response:
 * HTTP/1.1 OK
 * {
 *     "_id":1234RY5
 *     "name": "Gym Hits",
 *     "description": "A playlist that contains all the new hits you would like to hear",     
 *      ...
 * }
 * 
 * @apiUse Error404
 * @apiUse Error400
 */




 // GET Playlist followers :
/**
 * @api {get} /{PlayList_ID}/followers  Returns an array with the IDs of all the tracks in the playlist
 * @apiVersion 0.1.0
 * @apiName Get playlist followers
 * @apiGroup PlayList 
 * 
 *
 * @apiParam {String} PlayList_ID  The Spotify ID of the playlist.
 * 
 * @apiSuccess {String[]} Followers  Followers of the playlist
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *         followers : [HY668WI9, YPQ0038Z ,7IIH899],
 *     }
 *
 * @apiUse Error404
 * @apiUse Error400
 */



 //DELETING TRACK/S FROM PLAYLIST :


/**
 * @api {delete} /PlayList/trackIDs  Delete Playlist Track(s)
 * @apiVersion 0.1.0
 * @apiName deletePlayListTracks
 * @apiGroup PlayList
 * @apiPermission private
 * @apiSampleRequest localhost:3000/Playlist/Tracks_ID.json
 *
 * @apiDescription Delete playlist tracks .The user must own the playlist.
 * @apiParam {String} PlayList_ID  The Spotify ID of the playlist.
 * 
 * 
 * @apiHeader {String} Authorization  (required) A valid user access token.The access token must have been issued on behalf of the current user. Getting details of the artists or users the current user follows requires authorization of the user-follow-read scope
 * @apiHeader {object} Content-Type Required if IDs are passed in the request body, otherwise ignored. The content type of the request body: application/json.
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 204 No Content
 * 
 * @apiUse Error404
 * @apiUse Error400
 * @apiError EditDenied If the user tries to edit a playlist he has no permision for .
 * @apiErrorExample Response (example):
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "Permission to edit playlist denied"
 *     }
 * 
 * 
 */

 // UPDATE PLAYLIST:

 
/**
 * @api {PUT} 	/playlists/{playlist_id}  Update Playlist Details
 * @apiVersion 0.1.0
 * @apiName updatePlayList
 * @apiGroup PlayList
 * @apiPermission private
 *
 * @apiDescription Update playlist details .The user must own the playlist.
 * @apiParam {String} PlayList_ID  The Spotify ID of the playlist.
 * 
 * 
 * @apiHeader {String} Authorization  (required) A valid user access token.The access token must have been issued on behalf of the current user. Getting details of the artists or users the current user follows requires authorization of the user-follow-read scope
 * @apiHeader {object} Content-Type Required if IDs are passed in the request body, otherwise ignored. The content type of the request body: application/json.
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 204 No Content
 * 
 * @apiUse Error404
 * @apiUse Error400
 * @apiError EditDenied If the user tries to edit a playlist he has no permision for .
 * @apiErrorExample Response (example):
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "Permission to edit playlist denied"
 *     }
 * 
 
 */



// ADD TRACKS :     
// my function returns a playlist object & the documentation returns a snapshot f the playlist (Discuss with frontend and 3aqrab)!
/**
 * @api {post} /me/PlayList/{PlayList_ID}/tracks
 * @apiVersion 0.1.0
 * @apiName postAddTracks
 * @apiGroup PlayList
 * 
 * @apiHeader {String} Authorization  (required) A valid user access token.The access token must have been issued on behalf of the current user. Getting details of the artists or users the current user follows requires authorization of the user-follow-read scope
 * @apiHeader {object} Content-Type Required if IDs are passed in the request body, otherwise ignored. The content type of the request body: application/json.
 *
 *
 * @apiDescription Add Tracks to Playlist.
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 201 Created
 * 
 * @apiUse Error404
 * @apiUse Error400
 * @apiError AddingTrackDenied If the user tries to add tracks to a playlist that has more than 10,000 songs r that he doesn' have permision for .
 * @apiErrorExample Response (example):
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "Permission to add tracks denied"
 *     }
 *
 *
 */

