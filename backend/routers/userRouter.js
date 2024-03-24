const express = require('express');
const router = express.Router();

const User = require('../models/userModel');


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

router.post('/login',async(req,res)=>{
    try {
        console.log(req.body);
        const {email,password} = req.body;
        await new User({email,password}).save()
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
        });
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})