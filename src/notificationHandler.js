const webpush = require("web-push");
const User = require("./models/user");

module.exports = async (payload, recipientId) => {
  const recipient = await User.findById(
    recipientId,
    "pushSubscription notifications"
  );
  
  webpush.sendNotification(recipient.pushSubscription, JSON.stringify(payload));

  payload.read = false;
  await User.findByIdAndUpdate( recipientId, { $push: { notifications: payload } });
};
