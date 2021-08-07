const express = require("express")
const router = express.Router()
const DataModel  = require('../models/data')

router.get("/mydata", async (req, res) => {
    
    try {
        if (req.session.isLoggedIn) {
        
            let _id = req.session.user._id
            let data = await DataModel.find({userID: _id}).lean()
            let result = data[0].myData
            res.render("mydata", {result})
    
        }
        else {
            res.render("loginSignup")
        }
    } catch (error) {
        res.json(error)
    }
    
    
})

module.exports = router