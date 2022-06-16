const express = require('express')
const router = express.Router()

const KehadiranController = require('../controller/kehadiranController')

// first api endpoint 
router.get('/' , (req , res) => { 
    res.send('Hello World')
    console.log('Hello World')
})

// Kehadiran controller api endpoint 
router.get('/kehadiran' , KehadiranController.GetAllKehadiran)
router.post('/kehadiran'  , KehadiranController.PostKehadiran)

module.exports = router