import axios from 'axios'

// POST kehadiran 
export const AddKehadiran = data => axios.post('/api/v1/kehadiran' , data)

// POST ucapan 
export const AddUcapan = data => axios.post('/api/v1/ucapan' , data)


