// Object : Album
// ------------------------------------------------------------------------------------------

/**
 * 
 * @apiDefine Album
 * @apiVersion 0.1.0
 * 
 //* @apiSuccess {String} Album_ID The Album's ID Number.
 * @apiSuccess {String} Album_Name The album's name.
 * @apiSuccess {String[]} Album_Track_IDs The IDs of all the track in this album.
 * @apiSuccess {String} Description The albums discription/info.
 * @apiSuccess {String} Album_image_url A HTTP-based URL pointing to the icon image pf the album.
 * @apiSuccess {String} Artist_Of_Album_ID The ID Number of the artist whom this album belongs to.
 * @apiSuccess {Srting[]} Albums_Genres The IDs of all the genres in this album.
 * @apiSuccessExample {json} Success-Response:
 *     {
 *      "ID":34500
 *      "Album_Name": "Sahran",
 *      "Track_IDs":[2vf42121 , 33437zx],
 *      "Discription": "Amr Diabs latest Album . Relesed by Feb 2020",
 *      "Album_image_url":"",
 *      "Artist_Of_Album_ID": 3488wqx56,
 *      "Genres": [1Y4 , R22 , 5]
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
 * @api {get} /Album/Album_ID   Get Album
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
 *     "Album_ID":1234RY5
 *     "Album_Name": "...",
 *     "Discription": "...",     
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
 * @apiParam {String} Album_ID  The Spotify ID of the album.
 * 
 * @apiHeader {String} Authorization  (required) A valid user access token.The access token must have been issued on behalf of the current user. Getting details of the artists or users the current user follows requires authorization of the user-follow-read scope
 * 
 * @apiSuccess {Object} Tracks   returns simplified track objects wrapped in a paging object in JSON format.
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






