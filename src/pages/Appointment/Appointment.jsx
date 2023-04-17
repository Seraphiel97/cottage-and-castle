import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import * as appointmentsAPI from '../../utilities/appointments-api'

export default function Appointment() {
  
  const [apptData, setApptData] = useState({
    baseService: null,
    address: '',
    date: null,
    scrubScale: null,
    houseSize: null,
  })

  const [err, setErr] = useState('')
  
  function handleChange(evt) {
    setApptData({...apptData, [evt.target.name]: evt.target.value})
  }
  
  async function handleSubmit(evt) {
    evt.preventDefault()
    try {
      const appt = await appointmentsAPI.createAppointment(apptData)
      console.log(appt)
    } catch {
      setErr('Something went wrong')
      console.log(err)
    }
  }

  return (
    <>
    <h1>Appointment Request</h1>
    <form autoComplete="off" onSubmit={handleSubmit} 
    className="container columns-2">
      <div>
        <label>Service Package:</label>
        <select name="baseService" value={apptData.baseService} 
        onChange={handleChange} required>
          <option value="643d6cf7392f4c61d764bed8">Chariot</option>
          <option value="643d6cf7392f4c61d764bed9">Wagon</option>
          <option value="643d6cf7392f4c61d764beda">Carriage</option>
        </select>
      </div>
      <div>
        <label>Address:</label>
        <input name="address" value={apptData.address} 
        onChange={handleChange} required/>
      </div>
      <div>
        <label>Available Date:</label>
        <input type="date" name="date" value={apptData.date} 
        onChange={handleChange} required/>
      </div>
      <div>
        <label>Scrub Scale:</label>
        <select name="scrubScale" value={apptData.scrubScale} 
        onChange={handleChange} required>
          <option value={1}>1</option>
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
        <label>House Size(square ft.):</label>
        <input type="number" name="houseSize" value={apptData.houseSize} 
        onChange={handleChange} required/>
      </div>
      <button type="submit">Submit Request</button>
    </form>
    </>
  )
}
