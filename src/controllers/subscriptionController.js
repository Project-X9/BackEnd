
const User = require(`./../models/user.js`);
const jwt = require("jsonwebtoken");
const stripe = require('stripe')('sk_test_51Gs53YHI4RxWmnZ3WXxhR4Kcz4YXCBazll55JOGqodixAVYbiJhxUwxshsqhBS4yeVnvHlddeJe8zOQYacKCMDsX009AGOeauJ');

exports.getCheckoutSession = async (req, res) => {
    const user = req.user
    try{
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            success_url: `${req.protocol}://${req.get('host')}/`,
            cancel_url: `${req.protocol}://${req.get('host')}/`,
            customer_email: user.email,
            line_items: [
                {
                    name: 'One-Month Subscription',
                    amount: 10*100,
                    currency: 'usd',
                    quantity: 1
                }
            ]
        })
        
        res.status(200).json({
            status: 'success',
            session
        })

    } catch (err) {
        console.log(err.message)
        res.status(500).json({
            status: 'fail',
            message: 'failed to proceed to checkout.'
        })
    }
    
}