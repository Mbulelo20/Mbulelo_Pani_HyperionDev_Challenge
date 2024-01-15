const express = require('express');

const router = express.Router();



router.get('/', checkUsername, async (req, res) => {
    try {
        res.send("Welcome!")
    } catch (error) {
        console.log(error)
    }
})