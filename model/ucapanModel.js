const mongoose = require('mongoose')

const UcapanSchema = new mongoose.Schema({ 
    nama : { 
        type : String , 
        required : true
    }, 

    ucapan : { 
        type : String , 
        required : true
    }, 
}, { 
    timestamps : true , 
    collection : 'ucapan'
})

module.exports = mongoose.model('Ucapan' , UcapanSchema)