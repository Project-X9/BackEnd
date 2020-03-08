// -------------------------------------------------------------------------------------
/**
* @api {get} 	/artists/{id} Get an artist
* @apiName getArtist
* @apiGroup Artist
* @apiDescription Get Spotify catalog information for a single artist identified by their unique Spotify ID.
* @apiParam {string} artistId 
* @apiSuccess {Object} artist
* @apiHeader {Authorization} [Required]  A valid access token from the Spotify Accounts service: see the Web API Authorization Guide for details.
* @apiSuccessExample
*      HTTP/1.1 200 OK
*         {
* "external_urls" : {
*   "spotify" : "https://open.spotify.com/artist/0OdUWJ0sBjDrqHygGUXeCF"
*},
*  "followers" : {
*        "href" : null,
*   "total" : 306565
*  },
*  "genres" : [ "indie folk", "indie pop" ],
*  "href" : "https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF",
*  "id" : "0OdUWJ0sBjDrqHygGUXeCF",
*  "images" : [ {
*    "height" : 816,
*    "url" : "https://i.scdn.co/image/eb266625dab075341e8c4378a177a27370f91903",
*    "width" : 1000
*  }, {
*    "height" : 522,
*    "url" : "https://i.scdn.co/image/2f91c3cace3c5a6a48f3d0e2fd21364d4911b332",
*    "width" : 640
*  }, {
*    "height" : 163,
*    "url" : "https://i.scdn.co/image/2efc93d7ee88435116093274980f04ebceb7b527",
*    "width" : 200
*  }, {
*    "height" : 52,
*    "url" : "https://i.scdn.co/image/4f25297750dfa4051195c36809a9049f6b841a23",
*    "width" : 64
*  } ],
*  "name" : "Band of Horses",
*  "popularity" : 59,
*  "type" : "artist",
*  "uri" : "spotify:artist:0OdUWJ0sBjDrqHygGUXeCF"
*}
* 
*/
function getArtist(){
    return {code: 200, data: currentArtist}
}
// ------------------------------------------------------------------------------------

/**
 * @api {get} 	/artists/{id}/albums Get an Artist's Albums
 * @apiName getArtistAlbums
 * @apiGroup Artist
 * @apiDescription Get Spotify catalog information about an artist’s albums. Optional parameters can be specified in the query string to filter and sort the response.
 * @apiParam {string} artistId 	The Spotify ID for the artist.
 * @apiSuccess {Object[]} albums
 * @apiSuccessExample 
 *      HTTP/1.1 200 OK
 *          {
 *              album-object
 *          }
 * 
 * @apiHeader {Authorization} [Required]  A valid access token from the Spotify Accounts service: see the Web API Authorization Guide for details.

 */
function getArtistAlbums()
{
    return {code: 200, data: albumObject}
}
//-----------------------------------------------------------------------

/**
 * @api {get} /artists/{id}/top-tracks 
 * @apiName getArtistTopTracks 
 * @apiDescription Get Spotify catalog information about an artist’s top tracks by country.
 * @apiParam {string} artistId
 * @apiParam {string} country Required. An ISO 3166-1 alpha-2 country code or the string from_token.
 * @apiSuccess {Object[]} tracks
 * @apiSuccessExample 
 *  HTTP/1.1 200 OK 
 *      {
 *         
 *      }
 * 

 */
function getArtistTopTracks()
{
    return {code: 200, data: tracks}
}

//-----------------------------------------------------------
/**
 * @api {get} /artists/{id}/related-artists Get an Artist's Related Artists
 * @apiName getArtistRelatedArtists
 * @apiHeader {Authorization} [Required]  A valid access token from the Spotify Accounts service: see the Web API Authorization Guide for details.
 * @apiParam {string} artistId
 * @apiSuccess {Object[]} artists
 * @apiSuccessExample 
 *  HTTP/1.1 200 OK 
 *      {
 *          artists
 *      }
 * 

 */
function getArtistRelatedArtists()
{
    return
}
//---------------------------------------------------------------------------

/**
 * @api {get} /artists
 * @apiName getArtists
 * @apiSuccess {Object[]} artists
 * @apiSuccessExample 
 * @apiParam {String} ids 	Required. A comma-separated list of the Spotify IDs for the artists. Maximum: 50 IDs.
 *  
 * 
 */
function getArtists()
{
    
}