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
 * @apiSuccess {object[]} categories  an array of category objects (wrapped in a paging object) in JSON format.  
 
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *     {
 *       {
  "categories" : {
    "href" : "https://api.spotify.com/v1/browse/categories?offset=0&limit=20",
    "items" : [ {
      "href" : "https://api.spotify.com/v1/browse/categories/toplists",
      "icons" : [ {
        "height" : 275,
        "url" : "https://datsnxq1rwndn.cloudfront.net/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg",
        "width" : 275
      } ],
      "id" : "toplists",
      "name" : "Top Lists"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/mood",
      "icons" : [ {
        "height" : 274,
        "url" : "https://datsnxq1rwndn.cloudfront.net/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg",
        "width" : 274
      } ],
      "id" : "mood",
      "name" : "Mood"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/party",
      "icons" : [ {
        "height" : 274,
        "url" : "https://datsnxq1rwndn.cloudfront.net/media/derived/party-274x274_73d1907a7371c3bb96a288390a96ee27_0_0_274_274.jpg",
        "width" : 274
      } ],
      "id" : "party",
      "name" : "Party"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/pop",
      "icons" : [ {
        "height" : 274,
        "url" : "https://datsnxq1rwndn.cloudfront.net/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg",
        "width" : 274
      } ],
      "id" : "pop",
      "name" : "Pop"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/workout",
      "icons" : [ {
        "height" : 275,
        "url" : "https://datsnxq1rwndn.cloudfront.net/media/derived/workout_856581c1c545a5305e49a3cd8be804a0_0_0_275_275.jpg",
        "width" : 275
      } ],
      "id" : "workout",
      "name" : "Workout"
    }, ... ],
    "limit" : 20,
    "next" : "https://api.spotify.com/v1/browse/categories?offset=20&limit=20",
    "offset" : 0,
    "previous" : null,
    "total" : 31
  }
}
 *     }
 * 
 * @apiUse ERROR
 */


/**---------------------------------------------------------------get a category --------------------------------------------------------------- */



/**
 * @api {get} /browse/categories/{category_id} Get a single category used to tag items in Spotify
 * @apiGroup Get a Category
 * @apiName Get a Category
 *
 * @apiHeader {String} Authorization  (required) A valid user access token.
 * 
 * @apiParam {Number} category_id  The Spotify category ID for the category.
 * 
 * 
 * @apiSuccess {Object}    category         category object, 

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
          "href" : "https://api.spotify.com/v1/browse/categories/party",
          "icons" : [ {
            "height" : 274,
            "url" : "https://datsnxq1rwndn.cloudfront.net/media/derived/party-274x274_73d1907a7371c3bb96a288390a96ee27_0_0_274_274.jpg",
            "width" : 274
          } ],
          "id" : "party",
          "name" : "Party"
        }
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
    @apiParam {Number} category_id 	The Spotify category ID for the category
 * @apiParam   {Number {1-50}} [limit=20] limit  The maximum number of categories to return.
 * @apiParam   {Number} [offset=0] offset   The index of the first item to return.Use with limit to get the next set of categories. 
 * 
 * 
 * 
 * @apiSuccess {object} playlist  playlist objects (wrapped in a paging object) in JSON format
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
    {
  "playlists" : {
    "href" : "https://api.spotify.com/v1/browse/categories/party/playlists?country=BR&offset=0&limit=2",
    "items" : [ {
      "collaborative" : false,
      "description" : "Chegou o grande dia, aperte o play e partiu fim de semana!",
      "external_urls" : {
        "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DX8mBRYewE6or"
      },
      "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX8mBRYewE6or",
      "id" : "37i9dQZF1DX8mBRYewE6or",
      "images" : [ {
        "height" : 300,
        "url" : "https://i.scdn.co/image/ab67706f00000002206a95fa5badbe1d33b65e14",
        "width" : 300
      } ],
      "name" : "Sexta",
      "owner" : {
        "display_name" : "Spotify",
        "external_urls" : {
          "spotify" : "https://open.spotify.com/user/spotify"
        },
        "href" : "https://api.spotify.com/v1/users/spotify",
        "id" : "spotify",
        "type" : "user",
        "uri" : "spotify:user:spotify"
      },
      "primary_color" : null,
      "public" : null,
      "snapshot_id" : "MTU3NDM1NjI0MiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
      "tracks" : {
        "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX8mBRYewE6or/tracks",
        "total" : 62
      },
      "type" : "playlist",
      "uri" : "spotify:playlist:37i9dQZF1DX8mBRYewE6or"
    }, {
      "collaborative" : false,
      "description" : "O batidão dos funks mais bombados pra agitar a pista do seu baile! [Conteúdo explícito]",
      "external_urls" : {
        "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DWWmaszSfZpom"
      },
      "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWWmaszSfZpom",
      "id" : "37i9dQZF1DWWmaszSfZpom",
      "images" : [ {
        "height" : 300,
        "url" : "https://pl.scdn.co/images/pl/default/68fae5be6747e445c6bb34655c2bc2a77b9d1439",
        "width" : 300
      } ],
      "name" : "Segue o Baile",
      "owner" : {
        "display_name" : "Spotify",
        "external_urls" : {
          "spotify" : "https://open.spotify.com/user/spotify"
        },
        "href" : "https://api.spotify.com/v1/users/spotify",
        "id" : "spotify",
        "type" : "user",
        "uri" : "spotify:user:spotify"
      },
      "primary_color" : null,
      "public" : null,
      "snapshot_id" : "MTU3MzEyOTM2OCwwMDAwMDA5MDAwMDAwMTZlNDVkMTM0MmMwMDAwMDE2ZGNjMTY1NTFh",
      "tracks" : {
        "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWWmaszSfZpom/tracks",
        "total" : 67
      },
      "type" : "playlist",
      "uri" : "spotify:playlist:37i9dQZF1DWWmaszSfZpom"
    } ],
    "limit" : 2,
    "next" : "https://api.spotify.com/v1/browse/categories/party/playlists?country=BR&offset=2&limit=2",
    "offset" : 0,
    "previous" : null,
    "total" : 37
  }
}
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
 * @apiSuccess {object[]}    playlists   array of playlists object.(wrapped in a paging object)
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
  "message" : "Monday morning music, coming right up!",
  "playlists" : {
    "href" : "https://api.spotify.com/v1/browse/featured-playlists?country=SE&timestamp=2015-05-18T06:44:32&offset=0&limit=2",
    "items" : [ {
      "collaborative" : false,
      "description" : "Relaxed deep house to slowly help you get back on your feet and ready yourself for a productive week.",
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify/playlist/6ftJBzU2LLQcaKefMi7ee7"
      },
      "href" : "https://api.spotify.com/v1/users/spotify/playlists/6ftJBzU2LLQcaKefMi7ee7",
      "id" : "6ftJBzU2LLQcaKefMi7ee7",
      "images" : [ {
        "height" : 300,
        "url" : "https://i.scdn.co/image/7bd33c65ebd1e45975bbcbbf513bafe272f033c7",
        "width" : 300
      } ],
      "name" : "Monday Morning Mood",
      "owner" : {
        "external_urls" : {
          "spotify" : "http://open.spotify.com/user/spotify"
        },
        "href" : "https://api.spotify.com/v1/users/spotify",
        "id" : "spotify",
        "type" : "user",
        "uri" : "spotify:user:spotify"
      },
      "public" : null,
      "snapshot_id" : "WwGvSIVUkUvGvqjgj/bQHlRycYmJ2TkoIxYfoalWlmIZT6TvsgvGMgtQ2dGbkrAW",
      "tracks" : {
        "href" : "https://api.spotify.com/v1/users/spotify/playlists/6ftJBzU2LLQcaKefMi7ee7/tracks",
        "total" : 245
      },
      "type" : "playlist",
      "uri" : "spotify:user:spotify:playlist:6ftJBzU2LLQcaKefMi7ee7"
    }, {
      "collaborative" : false,
      "description" : "Du kommer studsa ur sängen med den här spellistan.",
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify__sverige/playlist/4uOEx4OUrkoGNZoIlWMUbO"
      },
      "href" : "https://api.spotify.com/v1/users/spotify__sverige/playlists/4uOEx4OUrkoGNZoIlWMUbO",
      "id" : "4uOEx4OUrkoGNZoIlWMUbO",
      "images" : [ {
        "height" : 300,
        "url" : "https://i.scdn.co/image/24aa1d1b491dd529b9c03392f350740ed73438d8",
        "width" : 300
      } ],
      "name" : "Upp och hoppa!",
      "owner" : {
        "external_urls" : {
          "spotify" : "http://open.spotify.com/user/spotify__sverige"
        },
        "href" : "https://api.spotify.com/v1/users/spotify__sverige",
        "id" : "spotify__sverige",
        "type" : "user",
        "uri" : "spotify:user:spotify__sverige"
      },
      "public" : null,
      "snapshot_id" : "0j9Rcbt2KtCXEXKtKy/tnSL5r4byjDBOIVY1dn4S6GV73EEUgNuK2hU+QyDuNnXz",
      "tracks" : {
        "href" : "https://api.spotify.com/v1/users/spotify__sverige/playlists/4uOEx4OUrkoGNZoIlWMUbO/tracks",
        "total" : 38
      },
      "type" : "playlist",
      "uri" : "spotify:user:spotify__sverige:playlist:4uOEx4OUrkoGNZoIlWMUbO"
    } ],
    "limit" : 2,
    "next" : "https://api.spotify.com/v1/browse/featured-playlists?country=SE&timestamp=2015-05-18T06:44:32&offset=2&limit=2",
    "offset" : 0,
    "previous" : null,
    "total" : 12
  }
}
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
 * @apiSuccess {object[]}  albums     array of simplifie album objects (wrapped in a paging object) 
 * @apiSuccess {string}    message   A Message sent back with the playlist
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
  "albums" : {
    "href" : "https://api.spotify.com/v1/browse/new-releases?country=SE&offset=0&limit=20",
    "items" : [ {
      "album_type" : "single",
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2RdwBSPQiwcmiDo9kixcl8"
        },
        "href" : "https://api.spotify.com/v1/artists/2RdwBSPQiwcmiDo9kixcl8",
        "id" : "2RdwBSPQiwcmiDo9kixcl8",
        "name" : "Pharrell Williams",
        "type" : "artist",
        "uri" : "spotify:artist:2RdwBSPQiwcmiDo9kixcl8"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/5ZX4m5aVSmWQ5iHAPQpT71"
      },
      "href" : "https://api.spotify.com/v1/albums/5ZX4m5aVSmWQ5iHAPQpT71",
      "id" : "5ZX4m5aVSmWQ5iHAPQpT71",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/e6b635ebe3ef4ba22492f5698a7b5d417f78b88a",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/92ae5b0fe64870c09004dd2e745a4fb1bf7de39d",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/8a7ab6fc2c9f678308ba0f694ecd5718dc6bc930",
        "width" : 64
      } ],
      "name" : "Runnin'",
      "type" : "album",
      "uri" : "spotify:album:5ZX4m5aVSmWQ5iHAPQpT71"
    }, {
      "album_type" : "single",
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
        },
        "href" : "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
        "id" : "3TVXtAsR1Inumwj472S9r4",
        "name" : "Drake",
        "type" : "artist",
        "uri" : "spotify:artist:3TVXtAsR1Inumwj472S9r4"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/0geTzdk2InlqIoB16fW9Nd"
      },
      "href" : "https://api.spotify.com/v1/albums/0geTzdk2InlqIoB16fW9Nd",
      "id" : "0geTzdk2InlqIoB16fW9Nd",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/d40e9c3d22bde2fbdb2ecc03cccd7a0e77f42e4c",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/dff06a3375f6d9b32ecb081eb9a60bbafecb5731",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/808a02bd7fc59b0652c9df9f68675edbffe07a79",
        "width" : 64
      } ],
      "name" : "Sneakin’",
      "type" : "album",
      "uri" : "spotify:album:0geTzdk2InlqIoB16fW9Nd"
    }, {
    ...
    } ],
    "limit" : 20,
    "next" : "https://api.spotify.com/v1/browse/new-releases?country=SE&offset=20&limit=20",
    "offset" : 0,
    "previous" : null,
    "total" : 500
  }
}
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
 * @apiParam   {Number {11000}} [limit=20] limit  The maximum number of categories to return.
 * 
 * @apiSuccess {string}    message   A Message sent back with the playlist
 * @apiSuccess {Object} recommendations    a recommendations response object in JSON format. 
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       {
  "tracks": [
    {
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/134GdR5tUtxJrf8cpsfpyY"
        },
          "href" : "https://api.spotify.com/v1/artists/134GdR5tUtxJrf8cpsfpyY",
          "id" : "134GdR5tUtxJrf8cpsfpyY",
          "name" : "Elliphant",
          "type" : "artist",
          "uri" : "spotify:artist:134GdR5tUtxJrf8cpsfpyY"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1D2oK3cJRq97OXDzu77BFR"
        },
          "href" : "https://api.spotify.com/v1/artists/1D2oK3cJRq97OXDzu77BFR",
          "id" : "1D2oK3cJRq97OXDzu77BFR",
          "name" : "Ras Fraser Jr.",
          "type" : "artist",
          "uri" : "spotify:artist:1D2oK3cJRq97OXDzu77BFR"
      } ],
      "disc_number" : 1,
      "duration_ms" : 199133,
      "explicit" : false,
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1TKYPzH66GwsqyJFKFkBHQ"
      },
      "href" : "https://api.spotify.com/v1/tracks/1TKYPzH66GwsqyJFKFkBHQ",
      "id" : "1TKYPzH66GwsqyJFKFkBHQ",
      "is_playable" : true,
      "name" : "Music Is Life",
      "preview_url" : "https://p.scdn.co/mp3-preview/546099103387186dfe16743a33edd77e52cec738",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:1TKYPzH66GwsqyJFKFkBHQ"
    }, {
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1VBflYyxBhnDc9uVib98rw"
        },
          "href" : "https://api.spotify.com/v1/artists/1VBflYyxBhnDc9uVib98rw",
          "id" : "1VBflYyxBhnDc9uVib98rw",
          "name" : "Icona Pop",
          "type" : "artist",
          "uri" : "spotify:artist:1VBflYyxBhnDc9uVib98rw"
      } ],
        "disc_number" : 1,
        "duration_ms" : 187026,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/15iosIuxC3C53BgsM5Uggs"
        },
        "href" : "https://api.spotify.com/v1/tracks/15iosIuxC3C53BgsM5Uggs",
        "id" : "15iosIuxC3C53BgsM5Uggs",
        "is_playable" : true,
        "name" : "All Night",
        "preview_url" : "https://p.scdn.co/mp3-preview/9ee589fa7fe4e96bad3483c20b3405fb59776424",
        "track_number" : 2,
        "type" : "track",
        "uri" : "spotify:track:15iosIuxC3C53BgsM5Uggs"
    },
    ...
  ],
  "seeds": [
    {
      "initialPoolSize": 500,
      "afterFilteringSize": 380,
      "afterRelinkingSize": 365,
      "href": "https://api.spotify.com/v1/artists/4NHQUGzhtTLFvgF5SZesLK",
      "id": "4NHQUGzhtTLFvgF5SZesLK",
      "type": "artist"
    }, {
      "initialPoolSize": 250,
      "afterFilteringSize": 172,
      "afterRelinkingSize": 144,
      "href": "https://api.spotify.com/v1/tracks/0c6xIDDpzE81m2q797ordA",
      "id": "0c6xIDDpzE81m2q797ordA",
      "type": "track"
    }
  ]
}
 *     }
 *     
 * @apiUse ERROR
 */