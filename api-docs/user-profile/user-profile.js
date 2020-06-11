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


















/**---------------------------------------------------------------deleted playlists  --------------------------------------------------------------- */
/**
 * @api {get} /users/deletedplaylist/:id  get Deleted Playlists
 * @apiName getDeletedPlaylists
 * @apiGroup User Profile
 * @apiVersion 0.1.0
 * 
 * @apiHeader {string} id  user Id  in path
 * @apiParamExample {json} PathParameter-Example:
 *     /users/deletedplaylist/5e89fc634cd1d420fc309234
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": "success",
    "data": {
        "playlist_array": [
            {
                "artists": [],
                "tracks": [
                    "5e86459124471028e4d3539b",
                    "5e8cf0927d231c3bec30c4e0"
                ],
                "dateCreated": "2020-04-03T14:01:49.509Z",
                "followers": [
                    "5e89fc634cd1d420fc3096c0"
                ],
                "likers": [
                    "5e8643edd411aa54c0357fbd"
                ],
                "_id": "5e89ed39399549014c9a674c",
                "name": "Empty Playlist",
                "author": "5e8643edd411aa54c0357fbd",
                "description": "Empty playlist desc.",
                "image": "https://lh3.googleusercontent.com/proxy/3B24TgpBUyyfWYwSbJKlhqu5OiI8J068XcVx7Pz5nTMr13HY5Q5blxmvExDPDfHMRWOWORkPouenQXL_hrTrdCamAHvNDEKodqGQ38jNRFPlMX_ySp-wTj_rqxCy_mh6Dfudopjn9Dmjs0BessG1ZSbJ2UqoyZ09Lw",
                "__v": 0
            }
        ]
    }
}
        
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail",
 *             "message": "user is not found"
 *           }
 *     }
 */
/**---------------------------------------------------------------Queue  --------------------------------------------------------------- */
/**
 * @api {get} /users/Queue/:id  get queue
 * @apiName getDeletedPlaylists
 * @apiGroup User Profile
 * @apiVersion 0.1.0
 * 
 * @apiHeader {string} id  user Id  in path
 * @apiParamExample {json} PathParameter-Example:
 *     /users//Queue/5e89fc634cd1d420fc309234
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "status": "success",
        "queue_tracks": [
            {
                "artists": [
                    "5e877b8fae42032b7c867feb"
                ],
                "likers": [],
                "genres": [
                    "5e89f67c47f4092a9080d94b"
                ],
                "_id": "5e8cf03d7d231c3bec30c4de",
                "description": "Song description",
                "name": "song#2",
                "playcount": 23,
                "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                "duration": null,
                "imageUrl": "https://images.genius.com/5130fa53a609b46f23a0672b972c7281.1000x1000x1.jpg",
                "album": "5e8a52538e2b41014c9c0e57"
            }
        ]
    }
        
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail",
 *             "message": "user is not found"
 *           }
 *     }
 */



/**---------------------------------------------------------------recoverPlaylist  --------------------------------------------------------------- */
/**
 * @api {patch} /users/recoverPlaylist/:id recoverPlaylist
 * @apiName recoverPlaylist
 * @apiGroup User Profile
 * @apiVersion 0.1.0
 * 
 * @apiParam {string} id  user Id in body
 * @apiHeader {string} id  playlist Id to be recovered in pat
 * @apiParamExample {json} bodyParameter-Example:
 *      {
	       "id":"5e8643edd411aa54c0357fbd"
        }
       
 * @apiParamExample {json} PathParameter-Example:
 *     /users/recoverPlaylist/5ee26146a1db461d54ef09bf
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "status": "success"
        }
        
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail",
 *             "message": "user is not found"
 *           }
 *     }
 */






/**---------------------------------------------------------------SignUp  --------------------------------------------------------------- */
/**
 * @api {post} /users/SignUp     SignUp
 * @apiName SignUp
 * @apiGroup User Profile
 * @apiVersion 0.1.0
 * 
 * @apiParam {string} id  user Id in body
 * @apiParamExample {json} bodyParameter-Example:
 *      {"name":"backendtest10",
            "email":"backendtest10@hotmail.com",
            "password":"123456789",
            "gender":"Male",
            "age":60,
            "isVerified":false}

    
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": "success",
    "data": {
        "id": "5ee279c9bbf9dd454cf40a7a",
        "user": {
            "dateAdded": "2020-06-11T17:32:07.544Z",
            "premium": false,
            "previouslyPremium": false,
            "CreatedPlaylists": [],
            "followers": [],
            "following": [],
            "playlists": [],
            "tracks": [],
            "albums": [],
            "artists": [],
            "deletedPlaylists": [],
            "likedPlaylists": [],
            "queue": [],
            "_id": "5ee279c9bbf9dd454cf40a7a",
            "name": "backendtest10",
            "email": "backendtest10@hotmail.com",
            "password": "$2a$08$XKKLDkg3AFuGunVSIGyv1OQpboR/nzErZaTH9DFgbPMPJK1NEIpcK",
            "gender": "Male",
            "age": 60,
            "isVerified": false,
            "ConfirmationToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhY2tlbmR0ZXN0MTBAaG90bWFpbC5jb20iLCJpYXQiOjE1OTE5MDA2MTcsImV4cCI6MTU5MTk4NzAxN30.32hwjmiLb0yslZkS7LkcaS1xuKK3HLLkGOQ8HPCwTfA",
            "tokens": [
                {
                    "_id": "5ee279c9bbf9dd454cf40a7b",
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWUyNzljOWJiZjlkZDQ1NGNmNDBhN2EiLCJpYXQiOjE1OTE5MDA2MTd9.zXQYSGo977hFsSkaO7VcoSS-JwttWdQ_fhfYn8G7TCM"
                }
            ],
            "notifications": [],
            "__v": 1
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWUyNzljOWJiZjlkZDQ1NGNmNDBhN2EiLCJpYXQiOjE1OTE5MDA2MTd9.zXQYSGo977hFsSkaO7VcoSS-JwttWdQ_fhfYn8G7TCM"
    }
}
        
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail",
 *             "message": "user is not found"
 *           }
 *     }
 */



/**--------------------------------------------------------------- confirmation  --------------------------------------------------------------- */
/**
 * @api {patch} /users/confirmation/:token confirmation of user
 * @apiName confirmation
 * @apiGroup User Profile
 * @apiVersion 0.1.0
 * 
 * @apiParam {string} id  user Id in body
 * @apiHeader {string} token  confirmation token 
 * @apiParamExample {json} bodyParameter-Example:
 *      {
	       "id":"5e8643edd411aa54c0357fbd"
        }
       
 * @apiParamExample {json} PathParameter-Example:
 *     /users/confirmation/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhY2tlbmR0ZXN0MTBAaG90bWFpbC5jb20iLCJpYXQiOjE1OTE5MDA2MTcsImV4cCI6MTU5MTk4NzAxN30.32hwjmiLb0yslZkS7LkcaS1xuKK3HLLkGOQ8HPCwTfA
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "status": "success"
        }
        
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail",
 *             "message": "user is not found"
 *           }
 *     }
 */


 /**--------------------------------------------------------------- is track exists  --------------------------------------------------------------- */
/**
 * @api {patch} /users/users/Track/Ex/:id check if track exists in users track array
 * @apiName isTrackExists
 * @apiGroup User Profile
 * @apiVersion 0.1.0
 * 
 * @apiParam {string} id  user Id in body
 * @apiHeader {string} id  track id
 * @apiParamExample {json} bodyParameter-Example:
 *      {
	       "id":"5e8643edd411aa54c0357fbd"
        }
       
 * @apiParamExample {json} PathParameter-Example:
                /users/Track/Ex/5ee17eba37775483c89e6467 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "status": "success",
            "data": true
        }
        
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail"
 *           }
 *     }
 */


 /**
 * @api {patch} /users/reset reset user password using email
 * @apiName forgetpassword
 * @apiGroup User Profile
 * @apiVersion 0.1.0
 * 
 * @apiParam {string} id  user Id in body
 * @apiParamExample {json} bodyParameter-Example:
 *      {
	       "id":"5e8643edd411aa54c0357fbd"
        }
       
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "status": "success",
            "data": true
        }
        
 * @apiError NotFound The requested resource could not be found. This error can be due to a temporary or permanent condition.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *          "error": {
 *             "status": "fail"
 *           }
 *     }
 */










