// -------------------------------------------------------------------------------------
/**
* @api {get} 	/artists/{id} Get an artist
* @apiName getArtist
* @apiGroup Artist
* @apiDescription Get Spotify catalog information for a single artist identified by their unique Spotify ID.
* @apiParam {string} artistID 
* @apiSuccess {Object} artist
* @apiHeader {String} Authorization Required  A valid access token from the Spotify Accounts service: see the Web API Authorization Guide for details.
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
 * @apiHeader {String} Authorization Required  A valid access token from the Spotify Accounts service: see the Web API Authorization Guide for details.

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
 * {
  "tracks": [ {
    "album" : {
      "album_type" : "album",
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
        },
        "href" : "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
        "id" : "43ZHCT0cAZBISjO8DG9PnE",
        "name" : "Elvis Presley",
        "type" : "artist",
        "uri" : "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/7xe8VI48TxUpU1IIo0RfGi"
      },
      "href" : "https://api.spotify.com/v1/albums/7xe8VI48TxUpU1IIo0RfGi",
      "id" : "7xe8VI48TxUpU1IIo0RfGi",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/4295b5ff74d4f944367144acbe616b6f62d20b17",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/203104e5843248c700b078f391d4bc759c5d7f47",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/0c0a172373b0211c590b241270d05b70889075a1",
        "width" : 64
      } ],
      "name" : "Blue Hawaii",
      "type" : "album",
      "uri" : "spotify:album:7xe8VI48TxUpU1IIo0RfGi"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
      },
      "href" : "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
      "id" : "43ZHCT0cAZBISjO8DG9PnE",
      "name" : "Elvis Presley",
      "type" : "artist",
      "uri" : "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 179773,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "USRC16101350"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/44AyOl4qVkzS48vBsbNXaC"
    },
    "href" : "https://api.spotify.com/v1/tracks/44AyOl4qVkzS48vBsbNXaC",
    "id" : "44AyOl4qVkzS48vBsbNXaC",
    "name" : "Can't Help Falling in Love",
    "popularity" : 70,
    "preview_url" : "https://p.scdn.co/mp3-preview/26e409b39a2da6dc18fab61020c90be2938dc0e9",
    "track_number" : 5,
    "type" : "track",
    "uri" : "spotify:track:44AyOl4qVkzS48vBsbNXaC"
  }, {
...
  } ]
}
 * }

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
 * @apiHeader {String} Authorization Required A valid access token from the Spotify Accounts service: see the Web API Authorization Guide for details.
 * @apiParam {string} artistID
 * @apiSuccess {Object[]} artists
 * @apiSuccessExample Success-Example:
 *  HTTP/1.1 200 OK 
 *      {
 *         {
  "artists" : [ {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/5ZKMPRDHc7qElVJFh3uRqB"
    },
    "followers" : {
      "href" : null,
      "total" : 18108
    },
    "genres" : [ "rockabilly" ],
    "href" : "https://api.spotify.com/v1/artists/5ZKMPRDHc7qElVJFh3uRqB",
    "id" : "5ZKMPRDHc7qElVJFh3uRqB",
    "images" : [ {
      "height" : 997,
      "url" : "https://i.scdn.co/image/beff5827580bcc4d129cbc0872768095eeba8c14",
      "width" : 1000
    }, {
      "height" : 638,
      "url" : "https://i.scdn.co/image/dbabf703779789917c4dd1c0e54da62c7a45ce92",
      "width" : 640
    }, {
      "height" : 199,
      "url" : "https://i.scdn.co/image/74761c343bec27c814b8e44e4bc095cbf1b674bb",
      "width" : 200
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/0c30af5647c74fee14fb97981c23b336abbc9f21",
      "width" : 64
    } ],
    "name" : "Wanda Jackson",
    "popularity" : 59,
    "type" : "artist",
    "uri" : "spotify:artist:5ZKMPRDHc7qElVJFh3uRqB"
  }, {
    ...
  } ]
}

 *      }
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
 * {
 * {
  "artists" : [ {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/0oSGxfWSnnOXhD2fKuz2Gy"
    },
    "followers" : {
      "href" : null,
      "total" : 633494
    },
    "genres" : [ "art rock", "glam rock", "permanent wave" ],
    "href" : "https://api.spotify.com/v1/artists/0oSGxfWSnnOXhD2fKuz2Gy",
    "id" : "0oSGxfWSnnOXhD2fKuz2Gy",
    "images" : [ {
      "height" : 1000,
      "url" : "https://i.scdn.co/image/32bd9707b42a2c081482ec9cd3ffa8879f659f95",
      "width" : 1000
    }, {
      "height" : 640,
      "url" : "https://i.scdn.co/image/865f24753e5e4f40a383bf24a9cdda598a4559a8",
      "width" : 640
    }, {
      "height" : 200,
      "url" : "https://i.scdn.co/image/7ddd6fa5cf78aee2f2e8b347616151393022b7d9",
      "width" : 200
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/c8dc28c191432862afce298216458a6f00bbfbd8",
      "width" : 64
    } ],
    "name" : "David Bowie",
    "popularity" : 77,
    "type" : "artist",
    "uri" : "spotify:artist:0oSGxfWSnnOXhD2fKuz2Gy"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/3dBVyJ7JuOMt4GE9607Qin"
    },
    "followers" : {
      "href" : null,
      "total" : 52338
    },
    "genres" : [ "glam rock", "protopunk" ],
    "href" : "https://api.spotify.com/v1/artists/3dBVyJ7JuOMt4GE9607Qin",
    "id" : "3dBVyJ7JuOMt4GE9607Qin",
    "images" : [ {
      "height" : 1300,
      "url" : "https://i.scdn.co/image/5515a710c94ccd4edd8b9a0587778ed5e3f997da",
      "width" : 1000
    }, {
      "height" : 832,
      "url" : "https://i.scdn.co/image/c990e667b4ca8240c73b0db06e6d76a3b27ce929",
      "width" : 640
    }, {
      "height" : 260,
      "url" : "https://i.scdn.co/image/de2fa1d11c59e63143117d44ec9990b9e40451a2",
      "width" : 200
    }, {
      "height" : 83,
      "url" : "https://i.scdn.co/image/b39638735adb4a4a54621293b99ab65c546f605e",
      "width" : 64
    } ],
    "name" : "T. Rex",
    "popularity" : 58,
    "type" : "artist",
    "uri" : "spotify:artist:3dBVyJ7JuOMt4GE9607Qin"
  } ]
}
 * }
 *  
 * 
 */
//function getArtists()
//{
    
//}