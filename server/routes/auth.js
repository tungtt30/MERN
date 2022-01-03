const express = require('express');
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

// @route POST api/auth/register
// @desc Register user 
// @access public

router.post('/register', async(req, res, next) => {
    const { username, password } = req.body
    console.log(username, password)

    // simple validation 
    if (!username || !password)
        return res
            .status(400)
            .json({ success: false, message: 'missing username or password' });

    try {
        //check for existing user
        const user = await User.findOne({ username: username });
        if (user) {
            return res.status(400).json({ success: false, message: "user name already exists" })
        }

        // All good
        const hashedPassword = await argon2.hash(password)
        const newUser = new User({ username, password: hashedPassword })
        await newUser.save()


        // Return token 
        const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN_SECRET)
        res.json({ success: true, message: "oke created success", accessToken })
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: "Server error" })
    }
})

// @route POST api / auth / login
// @desc Login User
// @access public

router.post('/login', async(req, res) => {
    const { username, password } = req.body


    if (!username || !password)
        return res
            .status(400)
            .json({ success: false, message: 'missing username or password' });

    try {
        // Check for existing username
        const user = await User.findOne({ username: username })
        if (!user)
            return res.status(400).json({ success: false, message: 'Incorrrect' })
                // Username found
        const passwordValid = await argon2.verify(user.password, password)
        if (!passwordValid)
            return res.status(400).json({ success: false, message: 'Incorrect' })


        //All good
        //return token 
        const accessToken = jwt.sign({ userId: user._id },
            process.env.ACCESS_TOKEN_SECRET
        )
        res.json({ success: true, message: 'Loggin success', accessToken })
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: "Server error" })
    }

})


module.exports = router