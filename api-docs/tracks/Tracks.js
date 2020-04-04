//--------------------------------------------------Get a track-------------------------------------------------------------------------------------


/**
 * @api {get} /tracks/{id}
 * @apiGroup Tracks
 * @apiName getTrack 	Get a Track
 * @apiDescription Get Spotify catalog information for a single track identified by its unique Spotify ID.
 * @apiHeader {String} Authorization (Required.) A valid access token from the Spotify Accounts service
 * @apiParam {string} trackID	The Spotify ID for the track.
 * @apiSuccess (Track object) {ArtistId[]} artists
 * @apiSuccess (Track object) {String} description
 * @apiSuccess (Track object) {String[]} likers
 * @apiSuccess (Track object) {String} url
 * @apiSuccess (Track object) {String} imageUrl
 * @apiSuccess (Track object) {String} name
 * @apiSuccess (Track object) {Number} playcount
 * @apiSuccess (Track object) {Number} duration
 * @apiSuccess (Track object) {CategoryId[]} genres
 * @apiSuccess {Object} track
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *          {
 *              
 *          }
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
 * @apiSuccessExample Success-Example:
 *       HTTP/1.1 200 OK
 *          {
 *               
 *          }
 * 
 * 
 */
