//--------------------------------------------------Get a track-------------------------------------------------------------------------------------


/**
 * @api {get} /tracks/{id}
 * @apiGroup Tracks
 * @apiName getTrack 	Get a Track
 * @apiDescription Get Spotify catalog information for a single track identified by its unique Spotify ID.
 * @apiHeader {String} Authorization (Required.) A valid access token from the Spotify Accounts service: see the Web API Authorization Guide for details.
 * @apiParam {string} id	The Spotify ID for the track.
 * @apiSuccess (Track) {ArtistId[]} artists
 * @apiSuccess (Track) {String} description
 * @apiSuccess (Track) {String []} likers
 * @apiSuccess (Track) {String} url
 * @apiSuccess (Track) {String} name
 * @apiSuccess (Track) {Number} playcount
 * @apiSuccess (Track) {Number} duration
 * @apiSuccess (Track) {CategoryId[]} genres
 * @apiSuccess {Object} track
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *          {
 *              "track"
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
 * @apiParam (Quer Parameters) {String} market 	(Optional) An ISO 3166-1 alpha-2 country code or the string from_token. Provide this parameter if you want to apply Track Relinking.
 * @apiHeader {String} Authorization  (required) A valid user access token.
 * @apiSuccessExample Success-Example:
 *       HTTP/1.1 200 OK
 *          {
 *              "tracks" = {Object[]}
 *          }
 * 
 * 
 */
