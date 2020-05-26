const User = require(`./../models/user.js`);
const Track = require(`./../models/track`)
const webpush = require('web-push')

module.exports = async (req, res) =>  {
    // const recipientSubscription = await User.findById(req.body.recipientId, 'pushSubscription');
    const recipientSubscription = req.body.subscription;
    const track = await Track.findById(req.body.trackId, 'name artists url genres imageUrl album');
    console.log(track);

    res.status(201).json({});
    const payload = JSON.stringify({track});
    webpush.sendNotification(recipientSubscription, payload);
};