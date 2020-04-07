//--------------------------------------------------Get a track-------------------------------------------------------------------------------------


/**
 * 
 * @apiGroup Tracks
 * @apiDefine trackOb
 * @apiSuccess (Track object) {String} name
 * @apiSuccess (Track object) {String} description
 * @apiSuccess (Track object) {String} url
 * @apiSuccess (Track object) {ArtistId[]} artists
 * @apiSuccess (Track object) {Number} playcount
 * @apiSuccess (Track object) {Number} duration
 * @apiSuccess (Track object) {String} imageUrl
 * @apiSuccess (Track object) {CategoryId[]} genres
 * @apiSuccess (Track object) {String[]} likers
 * 
 * 
 */


/**
 * @api {get} /tracks/{id}
 * @apiGroup Tracks
 * @apiName getTrack 	Get a Track
 * @apiDescription Get Spotify catalog information for a single track identified by its unique Spotify ID.
 * @apiHeader {String} Authorization (Required.) A valid access token from the Spotify Accounts service
 * @apiParam {string} trackID	The Spotify ID for the track.
 * @apiUse trackOb
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *          {
 *          "status":"success",
 *          "data" :{
 *                  "name" : "Stay with me",
 *                  "description" : "",
 *                  "url" : "https://open.spotify.com/track/5Nm9ERjJZ5oyfXZTECKmRt",
 *                  "artists" :"2wY79sveU1sp5g7SokKOiI",
 *                  "playcount" :"224,510,16",
 *                  "duration" : "3:22",
 *                  "imageUrl" : "",
 *                  "genres"  :"[322wd,46w,6yhb]",
 *                  "likers"  : [
 *                                 e4blKBWovov08jWgMweryjhg7,
 *                                 Tose4blKBWov08jWgM4vSkTos,
 *                              ]
 *             
 * 
 *                  }
 *              
 *          }
 * @apiError (Error 404) TrackNotFound The id of the Track was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "TrackNotFOund"
 *     }
 
 */
//------------------------------------------Get Several Tracks -----------------------------------------------------------------------------------------
/**
 * @api {get} /tracks
 * @apiGroup Tracks
 * @apiName getTracks Get Several Tracks
 * @apiDescription Get Spotify catalog information for multiple tracks based on their Spotify IDs.
 * @apiSuccess {Object[]} tracks
 * @apiParam (Query Parameters) {String[]} ids (Required) A comma-separated list of the Spotify IDs for the tracks. Maximum: 50 IDs.
 * @apiHeader {String} Authorization  (required) A valid user access token.
 * @apiUse trackOb
 * @apiSuccessExample Success-Example:
 *       HTTP/1.1 200 OK
 *          {
 *               
 *          }
 * @apiError (Error 404) TracksNotFound Tracks id not found
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "error": {
 *             "status": "fail",
 *             "message": "track is not found"
 *           }
 *     }
 * 
 */
