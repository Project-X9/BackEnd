/**
 * 
 * @api {get} /{user_id} Get a User's Profile
 * @apiName getUser
 * @apiGroup User Profile
 * @apiVersion  0.1.0
 * @apiDescription Get public profile information about a ProjectX user.
 * 
 * @apiUse HeaderAuth
 * @apiParam  {String} user_id User ID
 * 
 * @apiSuccess (200) {JSON} profile User Object in JSON format.
 * 
 * 
 * 
 * @apiSuccessExample {JSON} Success-Response:
 * HTTP/1.1 OK
 * {
 *     {
    "status": "success",
    "data": {
        "user": {
            "dateAdded": "2020-04-03T07:04:07.484Z",
            "premium": false,
            "previouslyPremium": false,
            "followers": [],
            "following": [],
            "playlists": [],
            "tracks": [],
            "albums": [],
            "artists": [],
            "_id": "5e86e011daba594edc83be73",
            "name": "John Engles",
            "email": "Jack@gmail.com",
            "password": "$2a$08$nQ.cCcZXCxpfqnN1qGTKBuNOpMotuqXvCNAAaQ3eroWUUFk6T./h6",
            "age": 20,
            "__v": 0
        }
    }
}
 * }
 * 
 * @apiUse Error404
 * @apiUse Error400
 * 
 * 
 */

///////////////////////////////////////////////////////////////////////////
 /**
  * 
  * @api {get} /me Get Current User's Profile
  * @apiName getCurrentUser
  * @apiGroup User Profile
  * @apiVersion  0.1.0
  * @apiDescription Get detailed profile information about the current user.
  * 
  * @apiUse HeaderAuth
  * @apiSuccess (200) {JSON} profile User Object in JSON format. 
  * 
*  
 * @apiSuccessExample {JSON} Success-Response:
 * HTTP/1.1 OK
 * {
 *     {
    "status": "success",
    "data": {
        "user": {
            "dateAdded": "2020-04-03T07:04:07.484Z",
            "premium": false,
            "previouslyPremium": false,
            "followers": [],
            "following": [],
            "playlists": [],
            "tracks": [],
            "albums": [],
            "artists": [],
            "_id": "5e86e011daba594edc83be73",
            "name": "John Engles",
            "email": "Jack@gmail.com",
            "password": "$2a$08$nQ.cCcZXCxpfqnN1qGTKBuNOpMotuqXvCNAAaQ3eroWUUFk6T./h6",
            "age": 20,
            "__v": 0
        }
    }
}
 * }
* 
* @apiUse Error404
* @apiUse Error400
*/

///////////////////////////////////////////////////////////////////////////

/**
 * 
 * @api {post} / Create a new User
 * @apiName createUser
 * @apiGroup User Profile
 * @apiVersion  0.1.0
 * @apiDescription Create a new ProjectX user profile
 * 
 * @apiUse HeaderAuth
 *  @apiParam  {String} Name Required.Full name of new user. 
 * @apiParam  {String} Email Required. A valid email address. Every user must use a unique email address.
 * @apiParam  {String} Password Required.
 * @apiParam  {Number} Age Required.
 * @apiSuccess (201) {JSON} profile User Object in JSON format.
 * 
 * 
 *  
 * @apiSuccessExample {JSON} Success-Response:
 * HTTP/1.1 OK
 * {
 *     {
    "status": "success",
    "data": {
        "user": {
            "dateAdded": "2020-04-03T07:04:07.484Z",
            "premium": false,
            "previouslyPremium": false,
            "followers": [],
            "following": [],
            "playlists": [],
            "tracks": [],
            "albums": [],
            "artists": [],
            "_id": "5e86e011daba594edc83be73",
            "name": "John Engles",
            "email": "Jack@gmail.com",
            "password": "$2a$08$nQ.cCcZXCxpfqnN1qGTKBuNOpMotuqXvCNAAaQ3eroWUUFk6T./h6",
            "age": 20,
            "__v": 0
        }
    }
}
 * }
 * 
 * @apiUse Error400
 * 
 * 
 */

 

 
///////////////////////////////////////////////////////////////////////////


/**
 * 
 * @api {patch} /{user_id} Update a User's Profile
 * @apiName getUser
 * @apiGroup User Profile
 * @apiVersion  0.1.0
 * 
 * @apiUse HeaderAuth
 * @apiParam  {String} user_id Required.User ID
 * @apiParam  {String} Name Full name of new user. 
 * @apiParam  {String} Email A valid email address. Every user must use a unique email address.
 * @apiParam  {Number} Age 
 * 
 * @apiSuccess (202) {JSON} profile User Object in JSON format.
 * 
 * 
 * 
 * @apiSuccessExample {JSON} Success-Response:
 * HTTP/1.1 OK
 * {
 *     {
    "status": "success",
    "data": {
        "user": {
            "dateAdded": "2020-04-03T07:04:07.484Z",
            "premium": false,
            "previouslyPremium": false,
            "followers": [],
            "following": [],
            "playlists": [],
            "tracks": [],
            "albums": [],
            "artists": [],
            "_id": "5e86e011daba594edc83be73",
            "name": "John Engles",
            "email": "Jack@gmail.com",
            "password": "$2a$08$nQ.cCcZXCxpfqnN1qGTKBuNOpMotuqXvCNAAaQ3eroWUUFk6T./h6",
            "age": 20,
            "__v": 0
        }
    }
}
 * }
 * @apiUse Error404
 * @apiUse Error400
 * 
 * 
 */



/////////////////////////////////////////////////////////////
/**
* @api {get} /{user_id}/tracks Get a User's Liked Tracks
  * @apiName getUserTracks
  * @apiGroup User Profile
  * @apiVersion  0.1.0
  * @apiDescription Retrieve the liked tracks of a User
  * 
  * @apiUse HeaderAuth
  * @apiSuccess (200) {JSON} JSON Object that contains Liked Tracks array 
  * 
*  
 * @apiSuccessExample {JSON} Success-Response:
 * HTTP/1.1 OK
 * {
 *     {
    "status": "success",
    "data": {
        "user": {
            "tracks": [],
            "_id": "5e713ba0ed7df74e9011f8a9"
        }
    }
}
}
 * }
* 
* @apiUse Error404
* @apiUse Error400
*/


/////////////////////////////////////////////////////////////
/**
* @api {delete} /{user_id}/tracks/{track_id} Remove a track from a User's collection
  * @apiName removeUserTrack
  * @apiGroup User Profile
  * @apiVersion  0.1.0
  * 
  * @apiUse HeaderAuth
  * @apiSuccess (204) {JSON} JSON Object that contains Liked Tracks array 
  * 
*  
 * @apiSuccessExample {JSON} Success-Response:
 * HTTP/1.1 OK
 * {
}
* 
* @apiUse Error404
* @apiUse Error400
*/


/////////////////////////////////////////////////////////////
/**
* @api {get} /{user_id}/albums Get a User's Liked Albums
  * @apiName getUserAlbums
  * @apiGroup User Profile
  * @apiVersion  0.1.0
  * @apiDescription Retrieve the liked albums of a User
  * 
  * @apiUse HeaderAuth
  * @apiSuccess (200) {JSON} JSON Object that contains Liked Albums array 
  * 
*  
 * @apiSuccessExample {JSON} Success-Response:
 * HTTP/1.1 OK
 * {
 *     {
    "status": "success",
    "data": {
        "user": {
            "albums": [],
            "_id": "5e713ba0ed7df74e9011f8a9"
        }
    }
}
}
 * }
* 
* @apiUse Error404
* @apiUse Error400
*/


/////////////////////////////////////////////////////////////
/**
* @api {delete} /{user_id}/albums/{album_id} Remove a album from a User's collection
  * @apiName removeUserAlbum
  * @apiGroup User Profile
  * @apiVersion  0.1.0
  * 
  * @apiUse HeaderAuth
  * @apiSuccess (204) {JSON} JSON Object that contains Liked Tracks array 
  * 
*  
 * @apiSuccessExample {JSON} Success-Response:
 * HTTP/1.1 OK
 * {
}
* 
* @apiUse Error404
* @apiUse Error400
*/