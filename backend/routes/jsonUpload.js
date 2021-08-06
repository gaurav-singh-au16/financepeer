const express = require('express')
const router = express.Router()
const fs = require('fs')
const DataModel = require('../models/data')
router.use(express.urlencoded({extended:true}))
const fileUpload = require('express-fileupload')


router.use(fileUpload())



router.get('/upload', async(req, res) => {

    let rawdata = fs.readFileSync('./upload/data.json');
    let JsonData = JSON.parse(rawdata);
    console.log(JsonData)
    try {
        let data = await DataModel.create([{
            myData: JsonData
        }])
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})

router.post('/upload', (req, res) => {
    console.log("Received Request")
    let myFile = req.files.filename
    const data = {
        "filename": myFile.name
    }
    myFile.mv(`./upload/${myFile.name}`, (err) => {
        if (err) {
            res.send({uploaded: false})
            return
        }
        res.send({uploaded: true})
    })
})

module.exports = router