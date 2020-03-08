/**
 * @api {get} /tracks/{id}
 * @apiName getTrack 	Get a Track
 * @apiHeader {Authorization} Required. A valid access token from the Spotify Accounts service: see the Web API Authorization Guide for details.
 * @apiParam {string} 	The Spotify ID for the track.
 * @apiParam (Query parameters) {market} Optional. An ISO 3166-1 alpha-2 country code or the string from_token. Provide this parameter if you want to apply Track Relinking.
 * @apiSuccess {Object} track
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *          {
 *          }
 */
function getTrack()
{
    return {code: 200, data: trackObject}

}
//-----------------------------------------------------------
/**
 * @api {get} /tracks
 * @apiName getTracks Get Several Tracks
 * @apiSuccess {Object[]} tracks
 * @apiParam (Query Parameters) {ids} Required. A comma-separated list of the Spotify IDs for the tracks. Maximum: 50 IDs.
 * @apiParam (Quer Parameters) {market} 	Optional. An ISO 3166-1 alpha-2 country code or the string from_token. Provide this parameter if you want to apply Track Relinking.
 * @apiSuccessExample Success-Example:
 *       HTTP/1.1 200 OK
 *          {
 *          }
 * 
 * 
 */
function getTracks()
{
    return {code: 200, data: trackObject}
}