// Object : Album
// ------------------------------------------------------------------------------------------
 //* @apiSuccess {String} Album_ID The Album's ID Number.
/**
 * 
 * @apiDefine Album
 * @apiVersion 0.1.0
 * 
 * @apiSuccess {String} name The album's name.
 * @apiSuccess {String[]} trackIds The IDs of all the track in this album.
 * @apiSuccess {String} description The albums description/info.
 * @apiSuccess {String} image A HTTP-based URL pointing to the icon image pf the album.
 * @apiSuccess {String} artist The ID Number of the artist whom this album belongs to.
 * @apiSuccess {String[]} genres The IDs of all the genres in this album.
 * @apiSuccessExample {json} Success-Response:
 *     {
 *      "_id":34500
 *      "name": "Sahran",
 *      "trackIds":[2vf42121 , 33437zx],
 *      "description": "Amr Diabs latest Album . Relesed by Feb 2020",
 *      "image":"",
 *      "artist": 3488wqx56,
 *      "genres": [1Y4 , R22 , 5]
 *     }
 *  
 */

 // ------------------------------------------------------------------------------------------
// Current Errors.
// ------------------------------------------------------------------------------------------

/**
 * @apiDefine GetAlbumError
 * @apiVersion 0.1.0
 *
 * @apiError NotAllowed Can't accsee this album
 *
 * @apiErrorExample  Response (example):
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "You can't access this album"
 *     }
 */

// ------------------------------------------------------------------------------------------
// Current Definitions.
// ------------------------------------------------------------------------------------------
/**
*
*/

// Get Album BY ID:
/**
 * @api {get} /album/Album_ID   Get Album
 * @apiVersion 0.1.0
 * @apiName getAlbum
 * @apiGroup Album
 * @apiDescription Gets an album using its specific ID.
 *
 * @apiParam {String} PlayList_ID  The Spotify ID of the playlist.
 * 
 * @apiHeader {String} Authorization  (required) A valid user access token.The access token must have been issued on behalf of the current user. Getting details of the artists or users the current user follows requires authorization of the user-follow-read scope
 * 
 * @apiSuccessExample {Object} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *     "_id":1234RY5
 *     "name": "...",
 *     "description": "...",     
 *      ...
 * }
 * 
 * @apiUse Error404
 * @apiUse Error400
 * @apiError AccessAlbumDenied If the user tries to access an album he doesn' have permision for .
 * @apiErrorExample Response (example):
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "Authorization bearer "
 *     }
 *
 *
 */

// GET ALL ALBUM TRACKS :
/**
 * @api {get} /{Album_ID}/tracks   Returns an array with the IDs of all the tracks in the album
 * @apiVersion 0.1.0
 * @apiName Get Album tracks
 * @apiGroup Album
 * 
 *
 * @apiParam {String} _id  The Spotify ID of the album.
 * 
 * @apiHeader {String} Authorization  (required) A valid user access token.The access token must have been issued on behalf of the current user. Getting details of the artists or users the current user follows requires authorization of the user-follow-read scope
 * 
 * @apiSuccess {Object} Tracks   returns array of tracks id.
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *          name : "Honey",
 *          descriptiom : "A 2016 pop track realesed as a part of the top selling ablum of that year by Wegz ",
 *        
 *     }
 *
 * @apiUse Error404
 * @apiUse Error400
 */



// Get Multiple Album :
/**
 * @api {get} /Album 
 * @apiVersion 0.1.0
 * @apiName getAlbums
 * @apiGroup Album
 *
 * @apiDescription Get Spotify catalog information for multiple albums identified by their Spotify IDs.
 * 
 * @apiHeader {String} Authorization  (required) A valid user access token.The access token must have been issued on behalf of the current user. Getting details of the artists or users the current user follows requires authorization of the user-follow-read scope
 * 
 * @apiSuccess (200) {Object} Albums   the response body contains an object whose key is "albums" and whose value is an array of album objects in JSON format.
 * @apiUse Error400
 */






