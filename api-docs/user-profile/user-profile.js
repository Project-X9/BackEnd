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
 *     "first_name": "Sean",
 *      "last_name": "Carey",
 *      ...
 * }
 * 
 * @apiUse Error404
 * @apiUse Error400
 * 
 * 
 */

 function getUser() {
     return;
 }


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
  * @apiSuccessExample {JSON} Success-Response:
  * HTTP/1.1 200 OK
* {
*     "first_name": "Sean",
*     "last_name": "Carey",
*      ...
* }
* 
* 
* @apiUse Error404
* @apiUse Error400
*/