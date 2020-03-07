/**
 * 
 * @api {get} /me/top/{type} Get User's Top Tracks and Albums
 * @apiName getTopTracksAndAlbums
 * @apiGroup Personalization
 * @apiVersion  0.1.0
 * @apiDescription Get the current user’s top artists or tracks based on calculated affinity.
 * 
 * @apiUse HeaderAuth
 * 
 * @apiParam  {String} type The type of entity to return. Valid values: "artists" or "tracks".
 * 
 * @apiParam  {String} limit Optional. The number of entities to return. Default: 20. Minimum: 1. Maximum: 50. For example: limit=2
 * 
 * @apiParam  {String} time_range Optional. Over what time frame the affinities are computed. Valid values: long_term (calculated from several years of data and including all new data as it becomes available), medium_term (approximately last 6 months), short_term (approximately last 4 weeks). Default: medium_term.
 * 
 * @apiSuccess (200) {JSON} list_top List of top tracks or albums in JSON Format.
 * 
 * 
 * @apiUse Error404
 * @apiUse Error400
 * 
 */

 function getTopTracksAndAlbums() {
     return;
 }