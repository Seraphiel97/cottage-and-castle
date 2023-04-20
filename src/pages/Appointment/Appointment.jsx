import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import * as appointmentsAPI from '../../utilities/appointments-api'

export default function Appointment({user}) {
  
  const navigate = useNavigate();

  const [apptData, setApptData] = useState({
    baseService: '',
    address: '',
    date: '',
    scrubScale: '',
    houseSize: '',
  })

  const [err, setErr] = useState('')
  
  function handleChange(evt) {
    setApptData({...apptData, [evt.target.name]: evt.target.value})
  }
  
  async function handleSubmit(evt) {
    
    evt.preventDefault()
    
    try {
      const appt = await appointmentsAPI.createAppointment({...apptData, user: user._id})
      console.log(appt)
      setApptData({
        baseService: '',
        address: '',
        date: '',
        scrubScale: '',
        houseSize: '',
      })
      navigate('/appointment/history')
    } catch {
      setErr('Apologies, something went wrong. Please check all information fields and try again.')
    }
  }

  return (
    <div className="">
      <form autoComplete="off" onSubmit={handleSubmit} 
      className="flex flex-col box-border items-center font-sans font-normal" >
        <h1 className="my-6">Appointment Request</h1>
        <div className="border-solid border-2 rounded-lg p-4 text-2xl bg-gradient-to-b from-pink to-mint">
          <div className="mb-3">
            <label className="">Service Package:</label>
            <select name="baseService" value={apptData.baseService} 
            onChange={handleChange} className="w-56 h-8 ml-1 border-solid border-2 rounded-md bg-indigo" 
            required>
              <option value="643d6cf7392f4c61d764bed8">--Select a Service Package--</option>
              <option value="643d6cf7392f4c61d764bed8">Chariot Package</option>
              <option value="643d6cf7392f4c61d764bed9">Wagon Package</option>
              <option value="643d6cf7392f4c61d764beda">Carriage Package</option>
            </select>
          </div>
          <div className="mb-3 content-between">
            <label className="mr-10">Address:</label>
            <input name="address" value={apptData.address} 
            onChange={handleChange} className="w-56 h-8 ml-12 border-solid border-2 rounded-md bg-indigo"
            required/>
          </div>
          <div className="mb-3">
            <label>Available Date:</label>
            <input type="datetime-local" name="date" value={apptData.date} 
            onChange={handleChange} className="w-56 h-8 ml-7 border-solid border-2 rounded-md bg-indigo"
            required/>
          </div>
          <div className="mb-3">
            <label>Scrub Scale:</label>
            <select name="scrubScale" value={apptData.scrubScale} 
            onChange={handleChange} className="w-56 h-8 ml-12 border-solid border-2 rounded-md bg-indigo" 
            required>
              <option value={1} selected>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </div>
          <div>
            <label className="">House Size(square ft.):</label>
            <input type="number" name="houseSize" value={apptData.houseSize} 
            onChange={handleChange} className="w-40 h-8 ml-1 border-solid border-2 rounded-md bg-indigo" 
            required/>
          </div>
        </div>
        <button type="submit" className="bg-gradient-to-t from-pink to-mint hover:bg-gray text-white font-bold py-2 px-4 rounded mt-3">
          Submit Request
        </button>
        
      </form>
      <p>{err}</p>
    </div>
  )
}
