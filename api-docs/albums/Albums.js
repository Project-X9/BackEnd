// Object : Album
// ------------------------------------------------------------------------------------------

/**
 * 
 * @apiDefine Album
 * @apiVersion 0.1.0
 * 
 * @apiSuccess {Number} Album_ID The Album's ID Number.
 * @apiSuccess {String} Album_Name The album's name.
 * @apiSuccess {Number[]} Album_Track_IDs The IDs of all the track in this album.
 * @apiSuccess {String} Discription The albums discription/info.
 * @apiSuccess {String} Album_image_url A HTTP-based URL pointing to the icon image pf the album.
 * @apiSuccess {Number} Artist_Of_Album_ID The ID Number of the artist whom this album belongs to.
 * @apiSuccess {Number[]} Albums_Genres The IDs of all the genres in this album.
 * @apiHeader  {Number} User_Access_ ID The users id to check if he is allowed to get this album or not
 *
 *  @apiSuccessExample {json} Success-Response:
 *     {
 *      "ID":34500
 *      "Album_Name": "Sahran",
 *      "Track_IDs":[256321242121 , 3343726443],
 *      "Discription": "Amr Diabs latest Album . Relesed by Feb 2020",
 *      "Album_image_url":"http://a2.twimg.com/profile_background_images/229557229/Ennovateapi-bg.png",
 *      "Artist_Of_Album_ID": 34889056,
 *      "Genres": [14 , 22 , 5]
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

// Get Album :
/**
 * @api {get} /Album/Album_ID Album ID
 * @apiVersion 0.1.0
 * @apiName getAlbum
 * @apiGroup Album
 * @apiPermission private
 * @apiSampleRequest localhost:3000/Album/Album_ID.json
 *
 * @apiDescription Get an album.
 * 
 * @apiError AccessAlbumDenied If the user tries to access an album he doesn' have permision for .
 * @apiErrorExample Response (example):
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "Authorization bearer "
 *     }
 *
 *
 */
function getAlbum() {
    return;
  }

  
// Get Album :
/**
 * @api {get} /Album/Album_ID Album ID
 * @apiVersion 0.1.0
 * @apiName getAlbum
 * @apiGroup Album
 * @apiPermission private
 * @apiSampleRequest localhost:3000/Album/Album_ID.json
 *
 * @apiDescription Get an album.
 * 
 * @apiError AccessAlbumDenied If the user tries to access an album he doesn' have permision for .
 * @apiErrorExample Response (example):
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "Authorization bearer "
 *     }
 *
 *
 */
function getAlbum() {
    return;
  }

  
// Get Album Tracks :
/**
 * @api {get} /Album/Album_Track_IDs Album Track IDs
 * @apiVersion 0.1.0
 * @apiName getAlbumTracks
 * @apiGroup Album
 * @apiPermission private
 * @apiSampleRequest localhost:3000/Album/Album_Track_IDs.json
 *
 * @apiDescription Get album tracks.
 * 
 * @apiError AccessDenied If the user tries to access an album he doesn't have permision for .
 * @apiErrorExample Response (example):
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "Authorization bearer "
 *     }
 *
 *
 */
function getAlbumTracks() {
    return;
  }


// Get Multiple Album :
/**
 * @api {get} /Album Albums IDs
 * @apiVersion 0.1.0
 * @apiName getAlbums
 * @apiGroup Album
 * @apiPermission private
 * @apiSampleRequest localhost:3000/Album.json
 *
 * @apiDescription Get albums.
 * 
 * 
 */
function getAlbums() {
    return;
  }



