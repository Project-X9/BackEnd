// ------------------------------------------------------------------------------------------
// Object: PlayList
// ------------------------------------------------------------------------------------------

/**
 * @apiDefine PlayList
 * @apiVersion 0.1.0
 * 
 * @apiSuccess {Number} PlayList_ID The playlist ID Number.
 * @apiSuccess {String} PlayList_Name The playlist's name.
 * @apiSuccess {Number[]} Track_IDs The IDs of all the track in this playlist
 * @apiSuccess {String} Discription The playlist discription.
 * @apiSuccess {String} PlayList_image_url A HTTP-based URL pointing to the icon image pf the palylist.
 * @apiSuccess {Boolean} Is_Private Indecation to if this playlist a private one ust for the user or it can be vied by other users.
 * @apiSuccess {Number} PlayList_Owner_ID The user ID Number of the user who created the playlist.
 * @apiSuccess {Number[]} Followers_IDs The IDs of all the followers of this playlist
 * @apiHeader  {Number} User_Access_ ID The users id to check if he is the owner
 *
 *  @apiSuccessExample {json} Success-Response:
 *     {
 *      "PlayList_ID":12345
 *      "PlayList_Name": "Todays Hits",
 *      "Track_IDs":[256321242121 , 3343726443],
 *      "Discription": "A playlist that contains all the new hits you would like to hear",
 *      "PlayList_image_url":"http://a2.twimg.com/profile_background_images/229557229/Ennovateapi-bg.png",
 *      "Is_Private":false,
 *      "PlayList_Owner_ID": 34889056,
 *      "Followers_IDs": [38543785643 , 9384832948]
 *     }
 *  
 */
 
// ------------------------------------------------------------------------------------------
// Current Errors.
// ------------------------------------------------------------------------------------------

/**
 * @apiDefine CreatePlayListError
 * @apiVersion 0.1.0
 *
 * @apiError NoModificationRight Only authenticated Users can modify the data
 *
 * @apiErrorExample  Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "You don't have the authority to modify this playlist"
 *     }
 */

// ------------------------------------------------------------------------------------------
// Current Permissions.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine private User access rights needed.
 * Optionally you can write here further Informations about the permission. To be modified later
 *
 *
 * @apiVersion 0.1.0
 */

 
// ------------------------------------------------------------------------------------------
// Current Definitions.
// ------------------------------------------------------------------------------------------
/**
*
*/

// ------------------------------------------------------------------------------------------
//     Managing the playLists
// ------------------------------------------------------------------------------------------
// ADD TRACKS :
/**
 * @api {post} /PlayList/PlayList_ID/Tracks_ID Track IDs
 * @apiVersion 0.1.0
 * @apiName postAddTracks
 * @apiGroup PlayList
 * @apiPermission private
 * @apiSampleRequest localhost:3000/v1/playlists/PlayList_ID/Tracks.json
 *
 * @apiDescription Add Tracks to Playlist.
 * 
 * @apiError AddingTrackDenied If the user tries to add tracks to a playlist that has more than 10,000 songs r that he doesn' have permision for .
 * @apiErrorExample Response (example):
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "Permission to add tracks denied"
 *     }
 *
 *
 */
function postAddTracks() {
    return;
  }

 // Creat playlist :
/**
 * @api {post} /PlayList/PlayList_ID Playlist ID
 * @apiVersion 0.1.0
 * @apiName putEditPlayList
 * @apiGroup PlayList
 * @apiPermission private
 * @apiSampleRequest localhost:3000/v1/Playlist/PlayList_ID.json
 *
 * @apiDescription Change a playlist's name and public/private state.The user must own the playlist.
 * 
 * @apiError EditDenied If the user tries to edit a playlist he has no permision for .
 * @apiErrorExample Response (example):
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "Permission to edit playlist denied"
 *     }
 *
 */
function putEditPlayList() {
    return;
  }

// Delete playlist tracks :
/**
 * @api {delete} /PlayList/Tracks_ID Playlist Track IDs
 * @apiVersion 0.1.0
 * @apiName deletePlayListTracks
 * @apiGroup PlayList
 * @apiPermission private
 * @apiSampleRequest localhost:3000/v1/Playlist/Tracks_ID.json
 *
 * @apiDescription Delete playlist tracks .The user must own the playlist.
 * 
 * @apiError EditDenied If the user tries to edit a playlist he has no permision for .
 * @apiErrorExample Response (example):
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "Permission to edit playlist denied"
 *     }
 * 
 * @apiError EditDenied If the user tries to edit a playlist he has no permision for in several ways .
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Permission to edit playlist denied"
 *     }
 *
 */
function deletePlayListTracks() {
    return;
  }

  




  




