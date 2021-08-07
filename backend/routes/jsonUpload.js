const express = require('express')
const router = express.Router()
const fs = require('fs')
const DataModel = require('../models/data')
router.use(express.urlencoded({extended:false}))
const fileUpload = require('express-fileupload')
router.use(fileUpload())

router.get('/upload', (req, res) => {
    
    if (req.session.isLoggedIn) {
        res.render("upload")

    }
    else {
        res.render("loginSignup")
    }
    res.render('upload')
})

router.post('/upload', (req, res) => {

    let myFile = req.files.filename
    const data = {
        "filename": myFile.name
    }
    myFile.mv(`./upload/${myFile.name}`, (err) => {
        if (err) {
            res.send({uploaded: false})
            return
        }
        let rawdata = fs.readFileSync('./upload/data.json');
        let JsonData = JSON.parse(rawdata);
        try {
            let data = DataModel.create([{
                myData: JsonData,
                userID: req.session.user._id
            }])
            res.redirect('/mydata')
        } catch (error) {
            res.json(error)
        }
    })
    
})


module.exports = router