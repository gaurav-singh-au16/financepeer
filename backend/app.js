const express = require('express')
const app = express()
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
require('dotenv').config()
app.use(fileUpload())

const {DATABASE} = process.env

app.use(express.static("upload"))
const loginRoute = require('./routes/login')
const jsonUploadRoute = require('./routes/jsonUpload')

app.use('', loginRoute)
app.use('', jsonUploadRoute)

mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if (err) throw err
    console.log('MONGO DB DataBase Connected')
})

app.listen(process.env.PORT || 5000, () => {
    console.log('Server Started @ 5000')
})