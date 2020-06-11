const jwt = require('jsonwebtoken');
const User = require('../models/user');


exports.facebookOAuth =   async  (req, res) => {

    
        console.log("User in");
        if(!req.user) {
            return res.send(401, 'User not authenticated');
        }

        const token = jwt.sign(
            {
                 _id: req.user._id
            },
            'secretcode', 
            {
              expiresIn: '7d'
            }
          );
          console.log("User in");
          User.updateOne({_id: req.user._id},{token: token})
          .exec()
          .then(result =>{
              return  res.status(200).json({
                message: 'User Entered',
                token: token
              });
           })
          .catch(err => {
            res.status(401).json({
              message: 'Auth failed'
            });
          });
    };
