const Kehadiran = require('../model/kehadiranModel')

// GET 
const GetAllKehadiran = async (req , res) => { 
    try { 
        const allKehadiran = await Kehadiran.find()
        res.status(201).json({ 
            status : 'SUCCESS', 
            data : { 
                allKehadiran
            }
        })
        console.log(allKehadiran)
    }catch(err) { 
        res.send(400).json({ 
            status : 'FAILED', 
        })
        console.log(err)
    }
}

// POST 
const PostKehadiran = async (req , res) => { 
    try { 
        const newKehadiran = await Kehadiran.create(req.body)
        res.status(201).json({ 
            status : 'Success',
            data : { 
                newKehadiran
            }
        })
        console.log('Data Kehadiran Telah Dibuat')
        console.log(newKehadiran)
    }catch(err) { 
        res.status(400).json({ 
            status : 'Error',
            message : err
        })
        console.log(err)
    }
}

module.exports = { 
    GetAllKehadiran,
    PostKehadiran
}