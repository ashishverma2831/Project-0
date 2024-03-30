const express = require('express');
const router = express.Router();

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




module.exports = router;