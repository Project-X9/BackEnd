const User = require(`./../models/user.js`);
const sendNotification = require('./../notificationHandler')


exports.shareTrack = async (req, res) => {
    try {
      const senderId = req.body.senderId;
      const recipientId = await User.findOne({email:req.body.recipientEmail});
      const payload = {
        event: "share-song",
        time: Date.now(),
        senderId,
        trackId: req.body.trackId,
        albumId: req.body.trackId,
        read: false
      };
      if(recipientId === null) {
          throw new Error('Failed. Invalid Recipient Email.')
      }
      sendNotification(payload, recipientId);
  
      res.status(201).json({
        status: "success",
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err.message,
      });
    }
  };
  