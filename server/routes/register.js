const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/user');
const checkUsername = require('../middleware/checkUsername');


router.post('/', checkUsername, async (req, res) => {

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    try {
        let user = User.findOne({email});

        if(user){
            return res.status(400).json({"msg": "User already exists"})
        }

        user = new User({
            username, email, password
        });
        
        const salt = bcrypt.genSalt(10);

        const hashedPass = bcrypt.hash(user.password, salt);

        user.password = hashedPass;

        await user.save();

        const payload = {
            user: user.id
        }

        const expiry = {
            expiresIn: 3600000
        }

        jwt.sign(payload, expiry, (error, token)=>{
            if(error) throw error;
            res.json({token})
        });

    } catch (error) {
        console.log(error.message)
    };
    res.status(400).send("Server err")
})