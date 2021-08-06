const express = require('express')
const router = express.Router()
const fs = require('fs')
const DataModel = require('../models/data')
router.use(express.urlencoded({extended:true}))
const fileUpload = require('express-fileupload')


router.use(fileUpload())

router.get('/upload', (req, res) => {
    res.render('upload')
})

router.post('/uploadfile', async(req, res) => {

    let myFile = req.files.filename
    const data = {
        "filename": myFile.name
    }
    myFile.mv(`./db/images/${myFile.name}`, (err) => {
        if (err) {
            res.send({uploaded: false})
            return
        }
        res.send({uploaded: true})
    })
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


module.exports = router