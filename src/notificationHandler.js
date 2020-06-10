const webpush = require("web-push");
const User = require("./models/user");

/**
 * @property {Function} notificationHandler  Sends a push notification and saves the notification in the DB
 * @param {object} payload - The Notification Object
 * @param {string} recipientId - The Id of the user who shall receive the notification
 */
exports.sendNotificationToUser = async (payload, recipientId) => {
  const recipient = await User.findById(
    recipientId,
    "pushSubscription notifications"
  );
  
  webpush.sendNotification(recipient.pushSubscription, JSON.stringify(payload));

  payload.read = false;
  await User.findByIdAndUpdate( recipientId, { $push: { notifications: payload } });
};

exports.sendNotificationToArtist = async (payload, recipientId) => {
  const recipient = await Artist.findById(
    recipientId,
    // "pushSubscription notifications"
  );
  
  console.log(recipient)
  webpush.sendNotification(recipient.pushSubscription, JSON.stringify(payload));

  await Artist.findByIdAndUpdate( recipientId, { $push: { notifications: payload } });
};
