const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    myData: {
        
    },
})
const DataModel = mongoose.model('uploadedData', DataSchema)



module.exports = DataModel
