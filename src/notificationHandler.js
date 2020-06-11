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
      "pushSubscription notifications name email"
    );
    // console.log(recipient)
    const pushNotificationPromise = webpush.sendNotification(recipient.pushSubscription, JSON.stringify(payload));
    pushNotificationPromise.catch(err => {
      console.log(`Failed to send push Notification to User ${recipient.email}`)
      console.log(err)
    })

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
      console.log(`Failed to send push Notification to ArtistId ${recipientId}`)
    })
  
    await Artist.findByIdAndUpdate( recipientId, { $push: { notifications: payload } });
  } catch (err) {
    throw err
  }
};
