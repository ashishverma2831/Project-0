const express = require('express');
const router = express.Router();
require('dotenv').config();
const stripe = require('stripe')('sk_test_51OqaSQSEAj666Bs3071GFENWzFvRBOBjNUikUNTn73Vr3qjVmpK8UxhWA6CY84TzbFCVHgFcmV1FEbgRNOj6ODcq00brENXfQi');
// console.log(process.env.STRIPE_SECRET_KEY);
const User = require('../models/userModel.js');
const bcrypt = require('bcryptjs');


// router.post('/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User
//             .findOne({ email, password })
//             .select('-password');
//         if (user) {
//             res.json(user);
//         }
//         else {
//             res.status(401).json({ message: 'Invalid email or password' });
//         }
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

router.post('/add',async(req,res)=>{
    try {
        console.log(req.body);
        const {email,password} = req.body;

        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password,salt);
        console.log(hashedPassword);

        await new User({email,password:hashedPassword}).save()
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
        });
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})

router.post('/authenticate',async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({
            email
        });
        if(user){
            const isMatch = await bcrypt.compareSync(password,user.password);
            if(isMatch){
                res.json(user);
            }
            else{
                res.status(401).json({message:'Invalid email or password'});
            }
        }
        else{
            res.status(401).json({message:'Invalid email or password'});
        }
    } catch (error) {
        res.status(500).json({message:error.message});
    }
    
    // console.log(req.body);
    // await User.findOne(req.body)
    // .then((result) => {
    //     if(result){
    //         res.json(result);
    //     }
    //     else{
    //         res.status(401).json({message:'Invalid email or password'});
    //     }
    // }).catch((err) => {
    //     res.status(500).json({message:err.message});
    // });
})

// router.post('/oauth',async(req,res)=>{

// })

router.put('/change-password',async(req,res)=>{
    try {
        const {password} = req.body;
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password,salt);
        console.log(hashedPassword);
        await User.findOneAndUpdate({email:req.body.email},{password:hashedPassword})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
        });
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})


router.post('/payment',async(req,res)=>{
    const product = await stripe.products.create({
        name: 'T-shirt',
    });
    // const price = stripe.prices.create({
    //     product: product.id,
    //     unit_amount: 2000,
    //     currency: 'usd',
    // });
    if(product){
        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: 2000,
            currency: 'inr',
        });
    }

    if(price.id){
        var session = await stripe.checkout.sessions.create({
            // payment_method_types: ['card'],
            line_items: [
              {
                price: price.id,
                quantity: 1,
              },
            ],
            mode: 'payment',
            success_url: 'https://example.com/success',
            cancel_url: 'https://example.com/cancel',
            customer_email: 'demo@gmail.com',
          });
    }
    res.json(session)
})

module.exports = router;