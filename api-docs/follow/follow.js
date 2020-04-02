/**---------------------------------------------------ERROR DEFINE API -------------------------------------------------------------------------- */

/**
 * @apiDefine ERROR
 * @apiDescription status value of the error code.
 * @apiDescription message a brief description of the error.
 * 
 * @apiError BadRequest The request could not be understood by the server due to malformed syntax. The message body will contain more information; see Response Schema.
 * @apiError UserUnauthorized The request requires user authentication or, if the request included authorization credentials, authorization has been refused for those credentials.
 * @apiError Forbidden (403) The server understood the request, but is refusing to fulfill it.
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

/**------------------------Check if Current User Follows Artists or Users------------------------ */

/**
 * @api {get} /me/following/contains   Check to see if the current user is following one or more artists or other Spotify users.
 * @apiName Check if Current User Follows Artists or Users
 * @apiGroup Follow
 * @apiVersion 0.1.0
 *
 * @apiHeader {String} Authorization  (required) A valid user access token.The access token must have been issued on behalf of the current user. Getting details of the artists or users the current user follows requires authorization of the user-follow-read scope
 * 
 * @apiParam {String} type The ID type: either artist or user.
 * @apiParam {Number[]{-50}} ids A comma-separated list of the artist or the user Spotify IDs to check. For example: ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q.
 * 
 * @apiSuccess {Boolean[]} boolean_array  array of true or false values, in the same order in which the ids were specified
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *        "boolean_array":[true,false,true]
 *     }
 * @apiUse ERROR
 */

 /**------------------------Check if Users Follow a Playlist------------------------ */

/**
 * @api {get} /playlists/{playlist_id}/followers/contains   Check to see if one or more Spotify users are following a specified playlist.
 * @apiName Check if Users Follow a Playlist
 * @apiGroup Follow
 * @apiVersion 0.1.0
 * 
 * @apiHeader {String} Authorization  (required) A valid user access token.The access token must have been issued on behalf of the current user. Getting details of the artists or users the current user follows requires authorization of the user-follow-read scope
 * 
 * @apiParam {Number[]{-5}} ids  A comma-separated list of Spotify User IDs ; the ids of the users that you want to check to see if they follow the playlist. 
 * @apiParam {Number} playlist_id  The Spotify ID of the playlist.
 * 
 * @apiSuccess {Boolean[]} boolean_array  array of true or false values, in the same order in which the ids were specified
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *        "boolean_array":[true,false,true]
 *     }
 * @apiUse ERROR
 */


  /**------------------------Follow Artists or Users------------------------ */

/**
 * @api {put} /me/following  Add the current user as a follower of one or more artists or other Spotify users.
 * @apiName Follow Artists or Users
 * @apiGroup Follow
 * @apiVersion 0.1.0
 * 
 * @apiHeader {String} Authorization  (required) A valid user access token.The access token must have been issued on behalf of the current user. Getting details of the artists or users the current user follows requires authorization of the user-follow-read scope
 * @apiHeader {object} Content-Type Required if IDs are passed in the request body, otherwise ignored. The content type of the request body: application/json.
 * 
 * 
 * @apiParam {String} type The ID type: either artist or user.
 * @apiParam {Number[]{-50}} [ids] A comma-separated list of the artist or the user Spotify  IDs ; the ids of the users that you want to check to see if they follow the playlist. 
 * @apiParam {Object[]{-50}} ids  (array of Spotify ID strings) Optional. A JSON array of the artist or user Spotify IDs. For example: {ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}. A maximum of 50 IDs can be sent in one request. Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.
 * 
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 204 No Content
 * @apiUse ERROR
 */

   /**------------------------Get User's Followed Artists------------------------ */

/**
 * @api {get} /me/following?type=artist  Get the current user’s followed artists
 * @apiName Get User's Followed Artists
 * @apiGroup Follow
 * @apiVersion 0.1.0
 *
 * @apiHeader {String} Authorization  	Required. A valid access token from the Spotify Accounts service: see the Web API Authorization Guide for details. The access token must have been issued on behalf of the current user. Getting details of the artists or users the current user follows requires authorization of the user-follow-read scope. See Using Scopes.
 * 
 * @apiParam {String} type Required. The ID type: currently only artist is supported
 * @apiParam {Number{1-50}} limit=20  	Optional. The maximum number of items to return. 
 * @apiParam {Number} [after] 	Optional. The last artist ID retrieved from the previous request.
 * 
 * @apiSuccess {Object} artists (artists object)  object in turn contains a cursor-based paging object of Artists.
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *     {
        "artists" : {
            "items" : [ {
            "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/0I2XqVXqHScXjHhk6AYYRe"
            },
            "followers" : {
                "href" : null,
                "total" : 7753
            },
            "genres" : [ "swedish hip hop" ],
            "href" : "https://api.spotify.com/v1/artists/0I2XqVXqHScXjHhk6AYYRe",
            "id" : "0I2XqVXqHScXjHhk6AYYRe",
            "images" : [ {
                "height" : 640,
                "url" : "https://i.scdn.co/image/2c8c0cea05bf3d3c070b7498d8d0b957c4cdec20",
                "width" : 640
            }, {
                "height" : 300,
                "url" : "https://i.scdn.co/image/394302b42c4b894786943e028cdd46d7baaa29b7",
                "width" : 300
            }, {
                "height" : 64,
                "url" : "https://i.scdn.co/image/ca9df7225ade6e5dfc62e7076709ca3409a7cbbf",
                "width" : 64
            } ],
            "name" : "Afasi & Filthy",
            "popularity" : 54,
            "type" : "artist",
            "uri" : "spotify:artist:0I2XqVXqHScXjHhk6AYYRe"
        },{
            ...
        }],
        "next" : "https://api.spotify.com/v1/users/thelinmichael/following?type=artist&after=0aV6DOiouImYTqrR5YlIqx&limit=20",
        "total" : 183,
            "cursors" : {
            "after" : "0aV6DOiouImYTqrR5YlIqx"
            },
        "limit" : 20,
        "href" : "https://api.spotify.com/v1/users/thelinmichael/following?type=artist&limit=20"
        }
}
 * @apiUse ERROR
 */


  /**------------------------Unfollow Artists or Users------------------------ */

/**
 * @api {DELETE} /me/following  Remove the current user as a follower of one or more artists or other Spotify users.
 * @apiName Unfollow Artists or Users
 * @apiGroup Follow
 * @apiVersion 0.1.0
 *
 * @apiHeader {String} Authorization  (required) A valid user access token.The access token must have been issued on behalf of the current user. Getting details of the artists or users the current user follows requires authorization of the user-follow-read scope
 * @apiHeader {object} Content-Type Required if IDs are passed in the request body, otherwise ignored. The content type of the request body: application/json.
 * 
 * 
 * @apiParam {String} type The ID type: either artist or user.
 * @apiParam {Number[]{-50}} [ids] A comma-separated list of the artist or the user Spotify  IDs ; the ids of the users that you want to check to see if they follow the playlist. 
 * @apiParam {Object[]{-50}} ids  (array of Spotify ID strings) Optional. A JSON array of the artist or user Spotify IDs. For example: {ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}. A maximum of 50 IDs can be sent in one request. Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.
 * 
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 204 No Content
 * @apiUse ERROR
 */



  /**------------------------Unfollow  a Playlist------------------------ */

/**
 * @api {DELETE} /playlists/{playlist_id}/followers  Remove the current user as a follower of a playlist
 * @apiName Unfollow  a Playlist
 * @apiGroup Follow
 * @apiVersion 0.1.0
 *
 * @apiHeader {String} Authorization  	Required. A valid access token from the Spotify Accounts service: see the Web API Authorization Guide for details. The access token must have been issued on behalf of the user.
Unfollowing a publicly followed playlist for a user requires authorization of the playlist-modify-public scope; unfollowing a privately followed playlist requires the playlist-modify-private scope. See Using Scopes.
Note that the scopes you provide relate only to whether the current user is following the playlist publicly or privately (i.e. showing others what they are following), not whether the playlist itself is public or private.
 * 
 * @apiParam {Number} playlist_id The Spotify ID of the playlist that is to be no longer followed.
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * @apiUse ERROR
 */
