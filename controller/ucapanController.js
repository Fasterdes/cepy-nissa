const Ucapan = require('../model/ucapanModel')

// GET 
const GetAllUcapan = async (req , res) => { 
    try { 
        const allUcapan = await Ucapan.find()
        res.status(201).json({ 
            status : 'SUCCESS', 
            data : { 
                allUcapan
            }
        })
        console.log(allUcapan)
    }catch(err) { 
        res.send(400).json({ 
            status : 'FAILED', 
        })
        console.log(err)
    }
}

// POST 
const PostUcapan = async (req , res) => { 
    try { 
        const newUcapan = await Ucapan.create(req.body)
        res.status(201).json({ 
            status : 'Success',
            data : { 
                newUcapan
            }
        })
        console.log('Data Ucapan Telah Dibuat')
        console.log(newUcapan)
    }catch(err) { 
        res.status(400).json({ 
            status : 'Error',
            message : err
        })
        console.log(err)
    }
}

module.exports = { 
    GetAllUcapan,
    PostUcapan
}