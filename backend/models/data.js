const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    myData: {
        
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usercredential'
    }
})
const DataModel = mongoose.model('uploadedData', DataSchema)



module.exports = DataModel
