const mongoose = require('mongoose')
const url = process.env.MONGO_URL

const connectDB = async () => { 
    await mongoose.connect(url , { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(console.log('DB Connected...'))
    .catch(err => { 
        console.log('DB Not Connected' , err.message)
        process.exit(1)
    })
}

module.exports = connectDB