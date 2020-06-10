/**
 * @apiGroup Artist
 * @apiDefine artistOb
 * @apiSuccess (Artist Object) {String} Bio 
 * @apiSuccess (Artist Object) {String[]} followers
 * @apiSuccess (Artist Object) {CategoryId[]} genres
 * @apiSuccess (Artist Object) {TrackId[]} tracks
 * @apiSuccess (Artist Object) {String} image
 * @apiSuccess (Artist Object) {String} name
 * @apiSuccess (Artist Object) {ArtistId[]} relatedArtists
 * @apiSuccess (Artist Object) {String} email
 * @apiSuccess (Artist Object) {String} password
 * @apiSuccess (Artist Object) {Date} dateAdded
 * 
 */


// ----------------------------------------------Get an artist--------------------------------------------------------------------------------------
/**
 * @api {get} 	/artists/{id} Get an artist
 * @apiName getArtist get an artist
 * @apiGroup Artist
 * @apiDescription Get Spotify catalog information for a single artist identified by their unique Spotify ID.
 * @apiParam {string} artistID 
 * @apiUse artistOb
 * 
 * @apiHeader {String} Authorization Required  A valid access token from the Spotify Accounts service
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *          {
 *              "name":"Sam Smith",
 *              "bio": "Samuel Frederick Smith is an English singer and songwriter.",
 *              "followers": [
 *                      23456yjgfcvbg123es6thb,
 *                      123456uhgbnb3edr45rftv,
 *                      w3456yujvcnjuytredcvbh
 *                          ]
 *              "genres": [
 *                      322wd,
 *                      46w,
 *                      6yhb
 *                        ]
 *              "tracks": []
 *              "image": ""
 *              "relatedArtists": []
 *              "email": "samsmith@gmail.com"
 *              "dateAdded" : "12/3/20"
 *                
 *          }
 * 
 * @apiError (Error 404) ArtistNotFound Artist id not found
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "error": {
 *             "status": "fail",
 *             "message": "artist not found"
 *           }
 *     }
 *        
 * 
 */

// ---------------------------------------------GET ARTIST ALBUMS----------------------------------------------------------------------------------

/**
 * @api {get} 	/artists/{id}/albums Get an Artist's Albums
 * @apiName getArtistAlbums get an artist albums
 * @apiGroup Artist
 * @apiDescription Get Spotify catalog information about an artist’s albums. Optional parameters can be specified in the query string to filter and sort the response.
 * @apiParam {string} artistID 	The Spotify ID for the artist.
 * @apiUse artistOb
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *          {
 *              album-object
 *          }
 * 
 * @apiHeader {String} Authorization Required  A valid access token from the Spotify Accounts service
 * 
 * @apiError (Error 404) AlbumsNotFound Artist id not found
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "error": {
 *             "status": "fail",
 *             "message": "albums not found"
 *           }
 *     }
 */
//function getArtistAlbums()
//{
//    return {code: 200, data: albumObject}
//}
//---------------------------------GetArtistTopTracks----------------------------------------------------------------------------------------------

/**
 * @api {get} /artists/{id}/top-tracks 
 * @apiName getArtistTopTracks  Get Artist Top Tracks
 * @apiGroup Artist
 * @apiDescription Get Spotify catalog information about an artist’s top tracks.
 * @apiHeader {String} Authorization 	(Required.) A valid access token from the Spotify Accounts service
 * @apiParam {string} artistID
 * @apiSuccess {Object[]} tracks
 * @apiSuccessExample Success-Response: 
 *  HTTP/1.1 200 OK 
 *              {
 * 
 *              }
 * @apiError (Error 404) TracksNotFound Artist id not found
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "error": {
 *             "status": "fail",
 *             "message": "tracks not found"
 *           }
 *     }
 * 
 */
//function getArtistTopTracks()
//{
//    return {code: 200, data: tracks}
//}

//-----------------------------GetArtistRelatedArtists--------------------------------------------------------------------------------------------
/**
 * @api {get} /artists/{id}/related-artists Get an Artist's Related Artists
 * @apiName getArtistRelatedArtists Get artist related artits
 * @apiGroup Artist 
 * @apiDescription Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community’s listening history.
 * @apiHeader {String} Authorization Required A valid access token from the Spotify Accounts service
 * @apiParam {string} artistID
 * @apiSuccess {string[]} artists ids
 * @apiSuccessExample Success-Example:
 *  HTTP/1.1 200 OK 
 * {    
 * }
 * @apiError (Error 404) ArtistsNotFound Artist id not found
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "error": {
 *             "status": "fail",
 *             "message": "artist/s not found"
 *           }
 *     }
 * 
 * 
 */
//function getArtistRelatedArtists()
//{
//    return
//}
//-------------------------------GetArtists-----------------------------------------------------------------------------------------------------

/**
 * @api {get} /artists
 * @apiName getArtists Get several artists
 * @apiGroup Artist
 * @apiHeader {String} Authorization Required. A valid access token from the Spotify Accounts service
 * @apiDescription Get Spotify catalog information for several artists based on their Spotify IDs
 * @apiSuccess {Object[]} artists
 * @apiParam (Query Parameters) {String} ids 	Required. A comma-separated list of the Spotify IDs for the artists. Maximum: 50 IDs.

 * @apiSuccessExample Success-Example:
 *  HTTP/1.1 200 OK 
 *      {
 *      }
 * @apiError (Error 404) ArtistNotFound Artist id not found
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "error": {
 *             "status": "fail",
 *             "message": "artists not found"
 *           }
 *     }
 */
//function getArtists()
//{
    
//}


 /**---------------------------------------------------------------top tracks of an artist --------------------------------------------------------------- */
/**
 * @api {patch} /artist/getTopTracks  top tracks of an artist
 * @apiGroup Artist
 * @apiName getTopTracks 
 * @apiVersion 0.1.0
 * 
 * @apiParam {string} id  artist Id in body
 * @apiParamExample {json} bodyParameter-Example:
 *      {
	       "id":"5e89fc634cd1d420fc3096c0"
        }
       
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "status":"success"
         "data": {
                .....tracks...
            }
        }
        
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail"
 *           }
 *     }
 */