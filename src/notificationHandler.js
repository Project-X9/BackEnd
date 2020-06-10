const webpush = require("web-push");
const User = require("./models/user");
const Artist = require('./models/artist')

/**
 * @property {Function} notificationHandler  Sends a push notification and saves the notification in the DB
 * @param {object} payload - The Notification Object
 * @param {string} recipientId - The Id of the user who shall receive the notification
 */
exports.sendNotificationToUser = async (payload, recipientId) => {
  try{
    const recipient = await User.findById(
      recipientId,
      "pushSubscription notifications"
    );
    
    webpush.sendNotification(recipient.pushSubscription, JSON.stringify(payload));
  
    payload.read = false;
    await User.findByIdAndUpdate( recipientId, { $push: { notifications: payload } });
  } catch (err) {
    throw err
  }
  
};

exports.sendNotificationToArtist = async (payload, recipientId) => {
  try{
    const recipient = await Artist.findById(
      recipientId,
      // "pushSubscription notifications"
    );
    
    const pushNotificationPromise = webpush.sendNotification(recipient.pushSubscription, JSON.stringify(payload));
    pushNotificationPromise.catch(err => {
      throw err
    })
  
    await Artist.findByIdAndUpdate( recipientId, { $push: { notifications: payload } });
  } catch (err) {
    throw err
  }
};
