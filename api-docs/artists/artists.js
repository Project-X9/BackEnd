// -------------------------------------------------------------------------------------
/**
 * @api {get} 	/artists/{id} Get an artist
 * @apiName getArtist
 * @apiGroup Artist
 * @apiDescription Get Spotify catalog information for a single artist identified by their unique Spotify ID.
 * @apiParam {string} artistID 
 * @apiSuccess {Object} artist
 * @apiSuccess (artist object) {String} Bio 
 * @apiSuccess (artist object) {String[]} followers
 * @apiSuccess (artist object) {CategoryId[]} genres
 * @apiSuccess (artist object) {TrackId[]} tracks
 * @apiSuccess (artist object) {String} image
 * @apiSuccess (artist object) {String} name
 * @apiSuccess (artist object) {ArtistId[]} relatedArtists
 * @apiSuccess (artist object) {String} email
 * @apiSuccess (artist object) {String} password
 * @apiSuccess (artist object) {Date} dateAdded
 * 
 * @apiHeader {String} Authorization Required  A valid access token from the Spotify Accounts service
 * @apiSuccessExample
 *      HTTP/1.1 200 OK
 *        
 * 
 */

// ------------------------------------------------------------------------------------

/**
 * @api {get} 	/artists/{id}/albums Get an Artist's Albums
 * @apiName getArtistAlbums
 * @apiGroup Artist
 * @apiDescription Get Spotify catalog information about an artist’s albums. Optional parameters can be specified in the query string to filter and sort the response.
 * @apiParam {string} artistID 	The Spotify ID for the artist.
 * @apiSuccess {Object[]} albums
 * @apiSuccessExample 
 *      HTTP/1.1 200 OK
 *          {
 *              album-object
 *          }
 * 
 * @apiHeader {String} Authorization Required  A valid access token from the Spotify Accounts service
 */
//function getArtistAlbums()
//{
//    return {code: 200, data: albumObject}
//}
//-----------------------------------------------------------------------

/**
 * @api {get} /artists/{id}/top-tracks 
 * @apiName getArtistTopTracks 
 * @apiGroup Artist
 * @apiDescription Get Spotify catalog information about an artist’s top tracks by country.
 * @apiHeader {String} Authorization 	(Required.) A valid access token from the Spotify Accounts service
 * @apiParam {string} artistID
 * @apiParam (Query Parameters) {string} country Required. An ISO 3166-1 alpha-2 country code or the string from_token.
 * @apiSuccess {Object[]} tracks
 * @apiSuccessExample 
 *  HTTP/1.1 200 OK 
 * 
 */
//function getArtistTopTracks()
//{
//    return {code: 200, data: tracks}
//}

//-----------------------------------------------------------
/**
 * @api {get} /artists/{id}/related-artists Get an Artist's Related Artists
 * @apiName getArtistRelatedArtists
 * @apiGroup Artist 
 * @apiDescription Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community’s listening history.
 * @apiHeader {String} Authorization Required A valid access token from the Spotify Accounts service
 * @apiParam {string} artistID
 * @apiSuccess {Object[]} artists
 * @apiSuccessExample Success-Example:
 *  HTTP/1.1 200 OK 
 * 
 */
//function getArtistRelatedArtists()
//{
//    return
//}
//---------------------------------------------------------------------------

/**
 * @api {get} /artists
 * @apiName getArtists
 * @apiGroup Artist
 * @apiHeader {String} Authorization Required. A valid access token from the Spotify Accounts service
 * @apiDescription Get Spotify catalog information for several artists based on their Spotify IDs
 * @apiSuccess {Object[]} artist
 * @apiParam (Query Parameters) {String} ids 	Required. A comma-separated list of the Spotify IDs for the artists. Maximum: 50 IDs.

 * @apiSuccessExample Success-Example:
 *  HTTP/1.1 200 OK 
 * 
 */
//function getArtists()
//{
    
//}