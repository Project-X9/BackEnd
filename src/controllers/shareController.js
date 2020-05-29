const User = require(`./../models/user.js`);
const Track = require(`./../models/track`)
const sendNotification = require('./../notificationHandler')

module.exports = (req, res) =>  {
   sendNotification(req.body.recipientId)
     // Send Response
     res.status(201).json({
        status: 'success'
    });
};