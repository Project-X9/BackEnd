const User = require(`./../models/user.js`);
const Track = require(`./../models/track`)
const sendNotification = require('./../notificationHandler')

module.exports = async (req, res) =>  {
    // const recipientSubscription = await User.findById(req.body.recipientId, 'pushSubscription');
    const recipientSubscription = req.body.subscription;
    console.log(recipientSubscription);
    const track = await Track.findById(req.body.trackId, 'name artists url genres imageUrl album');
    console.log(track);

    res.status(201).json({});
    const payload = JSON.stringify({track});
    webpush.sendNotification(recipientSubscription, payload);
};