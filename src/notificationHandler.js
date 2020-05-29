const webpush = require('web-push')

module.exports = async (type, recipientId) => {
    // const recipient = await User.findById(req.body.recipientId, 'pushSubscription notifications');
    const notifications = await User.findById(recipientId, 'notifications');
    const recipientSubscription = ''
    const track = await Track.findById(req.body.trackId, 'name artists url genres imageUrl album');

   
    // Send Push Notification
    const payload = JSON.stringify({track});
    webpush.sendNotification(recipientSubscription, payload);


    // Save Notification
    
    // notificationsArr = JSON.parse(notifications);
    // notificationsArr.
    // // await user.save({
    // //   validateBeforeSave: true
    // // });
}
 