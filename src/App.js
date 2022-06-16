import { useForm } from 'react-hook-form'
import axios from 'axios'

export default function App() { 
  const { register, handleSubmit, reset } = useForm()

  const addKehadiran = data => axios.post('/api/v1/kehadiran', data)

  const PostKehadiran = async(data) => { 
    await addKehadiran(data)
    .then(res => { 
      console.log(data)
      console.log(res.data)
      reset()
    }).catch(err => console.log(err)) 
  }

  return( 
    <>
      <form onSubmit={handleSubmit(PostKehadiran)}>
        <div>
          <label htmlFor="nama">Isi Nama</label>
          <input type="text" {...register('nama', { required: true })} />
        </div>
        <br />
        <div>
          <label htmlFor="pesan">Isi Pesan</label>
          <input type="text" {...register('pesan', { required: true })} />
        </div>
        <br />
        <div>
          <label htmlFor="kehadiran">Konfiirmasi</label>
          <select name="kehadiran" {...register('kehadiran')}>
            <option value=""></option>
            <option value="hadir">Hadir</option>
            <option value="tidak hadir">Tidak hadir</option>
          </select>
        </div>
        <input type="submit" value="Konfirmasi" />
      </form>
    </> 
  )
}