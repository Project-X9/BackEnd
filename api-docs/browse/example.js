/**---------------------------------------------------ERROR DEFINE API -------------------------------------------------------------------------- */

/**
 * @apiDefine ERROR
 * @apiDescription status value of the error code.
 * @apiDescription message a brief description of the error.
 * 
 * @apiError BadRequest The request could not be understood by the server due to malformed syntax. The message body will contain more information; see Response Schema.
 * @apiError UserUnauthorized The request requires user authentication or, if the request included authorization credentials, authorization has been refused for those credentials.
 * @apiError Forbidden The server understood the request, but is refusing to fulfill it.
 * @apiError UserNotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiError TooManyRequests Rate limiting has been applied
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *          "error": {
 *             "status": 400,
 *             "message": "invalid id"
 *           }
 *     }
 */

/**-------------------------------------------------------ALL OBJECTS--------------------------------------------------------------------------- */


/**
 * @apiDefine followers object
 * @apiSuccess {String} href	  A link to the Web API endpoint providing full details of the followers; null if not available. Please note that this will always be set to null, as the Web API does not support it at the moment.
 * @apiSuccess {String} total   The total number of followers.
 */
/**
 * @apiDefine external_URL_object
 * @apiSuccess {String} key 	The type of the URL, for example:- "spotify" - The Spotify URL for the object
 * @apiSuccess {String} value 	An external, public URL to the object.
 */
/**
 * @apiDefine image_objects
 * @apiSuccess {Number} height 	The image height in pixels. If unknown: null or not returned.
 * @apiSuccess {String} url   	The source URL of the image.
 * @apiSuccess {Number} width 	The image width in pixels. If unknown: null or not returned.
 */
/**
 * @apiDefine artist_object
 * @apiSuccess {Object} external_urls   (external URL object) Known public external URLs for this user.
 * @apiSuccess {String} href	 A link to the Web API endpoint providing full details of the artist.
 * @apiSuccess {String} id       The Spotify ID for the artist.
 * @apiSuccess {String} name     The name of the artist.
 * @apiSuccess {String} type     The object type: "artist" 
 * @apiSuccess {String} uri      The Spotify URI for the artist.
 */
/**
 * @apiDefine user_object
 * @apiSuccess {String} display_name     The name displayed on the user’s profile. null if not available.
 * @apiSuccess {Object} external_urls   (external URL object) Known public external URLs for this user.
 * @apiSuccess {Object[]} followers  (followers objects)Information about the followers of this user.
 * @apiSuccess {String} href     	       A link to the Web API endpoint for this user.
 * @apiSuccess {String} id   	           The Spotify user ID for this user.
 * @apiSuccess {Object[]} images  (image objects)The user’s profile image.
 * @apiSuccess {String} type   	       The object type: “user”
 * @apiSuccess {String} uri   	       The Spotify URI for this user.
 */
/**
 * @apiDefine category_object
 * @apiSuccess {String} href     A link to the Web API endpoint returning full details of the category.
 * @apiSuccess {object[]} icons  (image objects) The category icon, in various sizes.
 * @apiSuccess {String} name     	       The name of the category.
 * @apiSuccess {String} id   	           	The Spotify category ID of the category.
 */
/**
 * @apiDefine Playlist_Object
 * @apiSuccess {Boolean}   collaborative            (playlist object's field) true if the owner allows other users to modify the playlist.
 * @apiSuccess {String}    description              (playlist object's field) The playlist description. Only returned for modified, verified playlists, otherwise null
 * @apiSuccess {object}external_urls   (external URL object) Known public external URLs for this user.
 * @apiSuccess {string}    href                     (playlist object's field) A link to the Web API endpoint providing full details of the playlist.
 * @apiSuccess {Number}    id                       (playlist object's field) TheSpotify ID for the playlist.
 * @apiSuccess { object[]} images          (image objects)   The user’s profile image.
 * @apiSuccess {string}    name                     (playlist object's field) The name of the playlist.
 * @apiSuccess {object} owner               (user objects)  The user who owns the playlist
 * @apiSuccess {string}    snapshot_id              (playlist object's field) The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
 * @apiSuccess {object} tracks              (tracks object) A collection containing a link (href) to the Web API endpoint where full details of the playlist’s tracks can be retrieved, along with the total number of tracks in the playlist.
 * @apiSuccess {string}    type                     (playlist object's field) The object type: “playlist”
 * @apiSuccess {string}    uri                      (playlist object's field) The Spotify URI for the playlist.
 */
/**
 * @apiDefine artist_object
 * @apiSuccess {object}external_urls  (external URL  object) Known public external URLs for this user.
 * @apiSuccess {String} href	 A link to the Web API endpoint providing full details of the artist.
 * @apiSuccess {String} id       The Spotify ID for the artist.
 * @apiSuccess {String} name     The name of the artist.
 * @apiSuccess {String} type     The object type: "artist" 
 * @apiSuccess {String} uri      The Spotify URI for the artist.
 */
/**
 * @apiDefine album_object
 * @apiSuccess {[string]}album_group       The field is present when getting an artist’s albums. Possible values are “album”, “single”, “compilation”, “appears_on”. Compare to album_type this field represents relationship between the artist and the album.
 * @apiSuccess {String} album_type	       The type of the album: one of “album”, “single”, or “compilation”.
 * @apiSuccess {object[]} artists   (artist objects ) The artists of the album. Each artist object includes a link in href to more detailed information about the artist
 * @apiSuccess {String[]} available_markets   The markets in which the album is available: ISO 3166-1 alpha-2 country codes. Note that an album is considered available in a market when at least 1 of its tracks is available in that market.
 * @apiSuccess {object}external_urls   (external URL  object) Known public external URLs for this user.
 * @apiSuccess {String} href	 A link to the Web API endpoint providing full details of the album.
 * @apiSuccess {String} id       The Spotify ID for the album.
 * @apiSuccess {object[]} images     (image  objects)       The cover art for the album in various sizes, widest first.
 * @apiSuccess {String} name       The name of the album. In case of an album takedown, the value may be an empty string.
 * @apiSuccess {String} release_date       The date the album was first released, for example 1981. Depending on the precision, it might be shown as 1981-12 or 1981-12-15.
 * @apiSuccess {String} release_date_precision       The precision with which release_date value is known: year , month , or day.
 * @apiSuccess {object[]} restrictions  (restrictions objects) Part of the response when Track Relinking is applied, the original track is not available in the given market, and Spotify did not have any tracks to relink it with. The track response will still contain metadata for the original track, and a restrictions object containing the reason why the track is not available: "restrictions" : {"reason" : "market"}
 * @apiSuccess {String} type     The object type: “album”
 * @apiSuccess {String} uri      The Spotify URI for the album.
 */

/**
 * @apiDefine Recommendations_Response_object
 * @apiSuccess {object[]} seeds    (seed objects)  An array of recommendation seed objects.
 * @apiSuccess {object[]} tracks  (track objects)	An array of track object (simplified) ordered according to the parameters supplied.
 */

 /**----------------------------------------------------------------list of Categories---------------------------------------------------------- */
/**  
 * @api {get} /browse/categories Request list of Categories
 * @apiGroup GetAllCategories
 * @apiName Get All Categories
 *
 * @apiHeader {String} Authorization  (required) A valid user access token.
 * 
 * 
 * @apiParam {Number {1-50}} [limit=20] limit  The maximum number of categories to return.
 * @apiParam {Number} [offset=0] offset  The index of the first item to return.Use with limit to get the next set of categories.
 * 
 * @apiSuccess {string}    href      A link to the Web API endpoint returning the full result of the request.
 * @apiUse category_object
 * @apiSuccess {Number}    limit     The maximum number of items in the response (as set in the query or by default).
 * @apiSuccess {string}    next      URL to the next page of items. ( null if none)
 * @apiSuccess {Number}    offset    The offset of the items returned (as set in the query or by default).
 * @apiSuccess {string}    previous  URL to the previous page of items. ( null if none)
 * @apiSuccess {Number}    total     The maximum number of items available to return.
 * 
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *     {
 *       "pg":{
 *          "href":"https://api.spotify.com/v1/browse/categories/party",
 *          "categories":
 *          {
 *              "categ_1":
 *              {
 *                  "href" : "https://api.spotify.com/v1/browse/categories/party",
 *                  "icons" : [ {
 *                          "height" : 274,
 *                          "url" : "https://datsnxq1rwndn.cloudfront.net/media/derived/party-274x274_73d1907a7371c3bb96a288390a96ee27_0_0_274_274.jpg"
 *                          "width" : 274
 *                      } ],
 *                  "id" : "party",
 *                  "name" : "Party"
 *              },
 *              "categ_2":
 *              {
 *              "href" : "https://api.spotify.com/v1/browse/categories/party2",
 *              "icons" : [ {
 *                          "height" : 321,
 *                          "url" : "https://datsnxq1rwndn.cloudfront.net/media/derived/party-274x274_73d1907a7371c3bb96a288390a96ee27_0_0_274_274.jpg"
 *                          "width" : 154
 *                      } ],
 *              "id" : "party2",
 *              "name" : "Party2"
 *              }
 *           }
 *          "limit":32,
 *          "next":"https://api.spotify.com/v1/browse/categories/party",
 *          "offset":2,
 *          "prevoious":"https://api.spotify.com/v1/browse/categories/party",
 *          "total":44
 *        }
 *     }
 * 
 * @apiUse ERROR
 */


/**---------------------------------------------------------------get a category --------------------------------------------------------------- */



/**
 * @api {get} /browse/categories/{category_id} Request a Category by id
 * @apiGroup Get a Category
 * @apiName Get a Category
 *
 * @apiHeader {String} Authorization  (required) A valid user access token.
 * 
 * @apiParam {Number} category_id  The Spotify category ID for the category.
 * 
 * 
 * @apiSuccess {Object}    object         category object, "object" is only a placeholder.
 * @apiSuccess {String}    object.href    (category  field) A link to the Web API endpoint returning full details of the category.
 * @apiSuccess {Number}    object.id      (category  field) The Spotify category ID of the category.
 * @apiSuccess {String}    object.name    (category  field) The name of the category.
 * @apiSuccess {Object[]}  object.icons   (category  field) The category icon, in various sizes.
 * @apiSuccess {Number}    icon.height (category icon field) The image height in pixels. If unknown: null or not returned.
 * @apiSuccess {string}    icon.url    (category icon field) The source URL of the image.
 * @apiSuccess {Number}    icon.width  (category icon field) The image width in pixels. If unknown: null or not returned.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "href" : "https://api.spotify.com/v1/browse/categories/party",
 *      "icons" : [ {
 *                  "height" : 274,
 *                  "url" : "https://datsnxq1rwndn.cloudfront.net/media/derived/party-274x274_73d1907a7371c3bb96a288390a96ee27_0_0_274_274.jpg"
 *                  "width" : 274
 *                 } ],
 *      "id" : "party",
 *      "name" : "Party"
 *     }
 *     
 * @apiUse ERROR
 */


/**----------------------------------------------------------Get a list of Spotify playlists ---------------------------------------------------- */


/**
 * @api {get} /browse/categories/{category_id}/playlists   Get a list of Spotify playlists tagged with a particular category.
 * @apiGroup Get a Category's Playlists
 * @apiName Get a Category's Playlists
 *
 * @apiHeader  {String} Authorization  (required) A valid user access token.
 * @apiParam   {Number {1-50}} [limit=20] limit  The maximum number of categories to return.
 * @apiParam   {Number} [offset=0] offset   The index of the first item to return.Use with limit to get the next set of categories. 
 * 
 * 
 * 
 * @apiSuccess {string}    href      A link to the Web API endpoint returning the full result of the request.
 * @apiSuccess {Number} category_id  The Spotify category ID for the category.
 * @apiSuccess {Object[]} playlists array of playlist objects 
 * @apiSuccess {Number}    limit     The maximum number of items in the response (as set in the query or by default).
 * @apiSuccess {string}    next      URL to the next page of items. ( null if none)
 * @apiSuccess {Number}    offset    The offset of the items returned (as set in the query or by default).
 * @apiSuccess {string}    previous  URL to the previous page of items. ( null if none)
 * @apiSuccess {Number}    total     The maximum number of items available to return.
 * 
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "pg":{
 *          "href":"https://api.spotify.com/v1/browse/categories/party",
 *          "category_id": 123,
 *          "playlists":{
 *             "play_1":{
 *                  "collabortive": true,
 *                  "description":"sad",
 *                  "external_urls":{},
 *                  "href":"https://api.spotify.com/v1/browse/categories/party",
 *                  "id":3,
 *                  "images":{},
 *                  "name":"john",
 *                  "owner":"monica",
 *                  "snapshot_id":"scewq13x",
 *                  "tracks":{},
 *                  "type":"",
 *                  "uri":""
 *              },
 *              "play_2":{
 *                  "collabortive": true,
 *                  "description":"sad",
 *                  "external_urls":{},
 *                  "href":"https://api.spotify.com/v1/browse/categories/party",
 *                  "id":3,
 *                  "images":{},
 *                  "name":"john",
 *                  "owner":"monica",
 *                  "snapshot_id":"scewq13x",
 *                  "tracks":{},
 *                  "type":"",
 *                  "uri":""
 *              },
 *          },
 *          "limit":32,
 *          "next":"https://api.spotify.com/v1/browse/categories/party",
 *          "offset":2,
 *          "prevoious":"https://api.spotify.com/v1/browse/categories/party",
 *          "total":44
 *        }
 *     }
 *     
 * @apiUse ERROR
 */

 

/**------------------------------------------Get a list of Spotify featured playlists.--------------------------------------------------- */


/**
 * @api {get} /browse/featured-playlists   Get a list of Spotify featured playlists.
 * @apiGroup Get a List of Featured Playlists
 * @apiName Get a List of Featured Playlists
 *
 * @apiHeader  {String} Authorization  (required) A valid user access token.
 * 
 * @apiParam   {Number {1-50}} timestamp  (yyyy-MM-ddTHH:mm:ss) Use this parameter to specify the user’s local time to get results tailored for that specific date and time in the day
 * @apiParam   {Number {1-50}} [limit=20] limit  The maximum number of categories to return.
 * @apiParam   {Number} [offset=0] offset   The index of the first item to return.Use with limit to get the next set of categories. 
 * 
 * @apiSuccess {string}    message   A Message sent back with the playlist
 * @apiSuccess {string}    href      A link to the Web API endpoint returning the full result of the request.
 * @apiSuccess {Object[]} playlists array of playlist objects 
 * @apiSuccess {Number}    limit     The maximum number of items in the response (as set in the query or by default).
 * @apiSuccess {string}    next      URL to the next page of items. ( null if none)
 * @apiSuccess {Number}    offset    The offset of the items returned (as set in the query or by default).
 * @apiSuccess {string}    previous  URL to the previous page of items. ( null if none)
 * @apiSuccess {Number}    total     The maximum number of items available to return.
 * 
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "message": "saddewvcsedec"",
 *       "pg":{
 *          "href":"https://api.spotify.com/v1/browse/categories/party",
 *          "playlists":{
 *             "play_1":{
 *                  "collabortive": true,
 *                  "description":"sad",
 *                  "external_urls":{},
 *                  "href":"https://api.spotify.com/v1/browse/categories/party",
 *                  "id":3,
 *                  "images":{},
 *                  "name":"john",
 *                  "owner":"monica",
 *                  "snapshot_id":"scewq13x",
 *                  "tracks":{},
 *                  "type":"",
 *                  "uri":""
 *              },
 *              "play_2":{
 *                  "collabortive": true,
 *                  "description":"sad",
 *                  "external_urls":{},
 *                  "href":"https://api.spotify.com/v1/browse/categories/party",
 *                  "id":3,
 *                  "images":{},
 *                  "name":"john",
 *                  "owner":"monica",
 *                  "snapshot_id":"scewq13x",
 *                  "tracks":{},
 *                  "type":"",
 *                  "uri":""
 *              },
 *          },
 *          "limit":32,
 *          "next":"https://api.spotify.com/v1/browse/categories/party",
 *          "offset":2,
 *          "prevoious":"https://api.spotify.com/v1/browse/categories/party",
 *          "total":44
 *        }
 *     }
 *     
 * @apiUse ERROR
 */


 
 

/**-----------------------------------------------Get a list of new album releases featured in Spotif.------------------------------------------ */


/**
 * @api {get} /browse/new-releases  Get a list of new album releases featured in Spotif.
 * @apiGroup Get a List of New Releases
 * @apiName Get a List of New Releases
 *
 * @apiHeader  {String} Authorization  (required) A valid user access token.
 * 
 * @apiParam   {Number {1-50}} [limit=20] limit  The maximum number of categories to return.
 * @apiParam   {Number} [offset=0] offset   The index of the first item to return.Use with limit to get the next set of categories. 
 * 
 * 
 * @apiSuccess {string}    href      A link to the Web API endpoint returning the full result of the request.
 * @apiSuccess {string}    message   A Message sent back with the playlist
 * @apiSuccess {Object[]} albums array of albums objects 
 * @apiSuccess {Number}    limit     The maximum number of items in the response (as set in the query or by default).
 * @apiSuccess {string}    next      URL to the next page of items. ( null if none)
 * @apiSuccess {Number}    offset    The offset of the items returned (as set in the query or by default).
 * @apiSuccess {string}    previous  URL to the previous page of items. ( null if none)
 * @apiSuccess {Number}    total     The maximum number of items available to return.
 * 
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "saddewvcsedec"",
 *       "pg":{
 *          "href":"https://api.spotify.com/v1/browse/categories/party",
 *          "albums":{
 *             "album_1":{
 *              },
 *              "album2":{
 *              },
 *          },
 *          "limit":32,
 *          "next":"https://api.spotify.com/v1/browse/categories/party",
 *          "offset":2,
 *          "prevoious":"https://api.spotify.com/v1/browse/categories/party",
 *          "total":44
 *        }
 *     }
 *     
 * @apiUse ERROR
 */


 
 
 

/**-----------------------------------------------Get Recommendations Based on Seeds.------------------------------------------ */


/**
 * @api {get} /recommendations  Create a playlist-style listening experience based on seed artists, tracks and genres.           
 * @apiGroup Get Recommendations Based on Seeds
 * @apiName Get Recommendations Based on Seeds
 *
 * @apiHeader  {String} Authorization  (required) A valid user access token.
 * 
 * @apiParam   {Number {1-50}} [limit=20] limit  The maximum number of categories to return.
 * @apiParam   {Number} [offset=0] offset   The index of the first item to return.Use with limit to get the next set of categories. 
 * 
 * 
 * @apiSuccess {string}    href      A link to the Web API endpoint returning the full result of the request.
 * @apiSuccess {string}    message   A Message sent back with the playlist
 * @apiSuccess {Object[]} albums array of albums objects 
 * @apiSuccess {Number}    limit     The maximum number of items in the response (as set in the query or by default).
 * @apiSuccess {string}    next      URL to the next page of items. ( null if none)
 * @apiSuccess {Number}    offset    The offset of the items returned (as set in the query or by default).
 * @apiSuccess {string}    previous  URL to the previous page of items. ( null if none)
 * @apiSuccess {Number}    total     The maximum number of items available to return.
 * 
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "saddewvcsedec"",
 *       "pg":{
 *          "href":"https://api.spotify.com/v1/browse/categories/party",
 *          "albums":{
 *             "album_1":{
 *              },
 *              "album2":{
 *              },
 *          },
 *          "limit":32,
 *          "next":"https://api.spotify.com/v1/browse/categories/party",
 *          "offset":2,
 *          "prevoious":"https://api.spotify.com/v1/browse/categories/party",
 *          "total":44
 *        }
 *     }
 *     
 * @apiUse ERROR
 */