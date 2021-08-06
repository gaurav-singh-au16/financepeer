const express = require("express")
const router = express.Router()
const UserModel  = require('../models/user')
const bcrypt = require("bcrypt")
const session = require('express-session')

router.use(session({
    secret: "home",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 9000000
    }
}))

// Login & Signup Page

router.get("/login", (req, res) => {
    
    
})

// Logout

router.get("/logout", (req, res) => {
    req.session.destroy()
    
})

// customer Signup Post route

let globalData = {}
router.post('/signUp', async (req, res) => {
    const { name, email, mobile, password } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash((req.body).password, salt)
    signUpData = {
        name,
        email,
        password: hashedPassword
    }
    globalData = signUpData
    try {

        const newUserDoc = new UserModel(signUpData)

        const savedUserDoc = await newUserDoc.save()

        req.session.isLoggedIn = true
    

    } catch (error) {
        console.log(error)
        res.send(`Internal Error Occurred: ${error._message}`)
    }

})

// customer Login Post route

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    var foundUser = await UserModel.findOne({ email })
    if (foundUser == null) {
        let err = {
            error: "Email Not Exist"
        }
        res.render("customerLogin", err)
    }
    const isMatching = await bcrypt.compare(password, foundUser.password)


    if (foundUser != null && isMatching == true) {

        req.session.isLoggedIn = true
        req.session.user = foundUser

        

    }
    else {
        let err = {
            error: "Incorrect Password!!!"
        }
        
    }



})

module.exports = router