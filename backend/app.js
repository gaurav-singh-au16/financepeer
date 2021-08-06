const express = require('express')
const app = express()

const loginRoute = require('./routes/login')
const jsonUploadRoute = require('./routes/jsonUpload')

app.use('', loginRoute)
app.use('', jsonUploadRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log('Server Started @ 5000')
})