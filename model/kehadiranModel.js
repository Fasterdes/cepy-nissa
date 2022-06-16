const mongoose = require('mongoose')

const KehadiranSchema = new mongoose.Schema({ 
    nama : { 
        type : String , 
        required : true
    }, 

    pesan : { 
        type : String , 
        required : true
    }, 

    kehadiran : { 
        type : String , 
        required : true
    }
}, { 
    timestamps : true , 
    collection : 'kehadiran'
})

module.exports = mongoose.model('Kehadiran' , KehadiranSchema)