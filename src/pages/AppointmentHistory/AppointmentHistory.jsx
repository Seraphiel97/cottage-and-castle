import {useState, useEffect} from 'react'
import RequestedAppt from '../../components/RequestedAppt/RequestedAppt'
import ConfirmedAppt from '../../components/ConfirmedAppt/ConfirmedAppt'
import CompletedAppt from '../../components/CompletedAppt/CompletedAppt'
import * as appointmentsAPI from '../../utilities/appointments-api'


export default function AppointmentHistory({user}) {
  
  const [requestedAppts, setRequestedAppts] = useState([])
  const [confirmedAppts, setConfirmedAppts] = useState([])
  const [completedAppts, setCompletedAppts] = useState([])

  function handleState(data) {
    data.forEach(appt => {
      if (appt.status === 'Requested') {
        setRequestedAppts(prevState => [...prevState, appt]);
      } else if (appt.status === 'Confirmed') {
        setConfirmedAppts(prevState => [...prevState, appt]);
      } else if (appt.status === 'Completed') {
        setCompletedAppts(prevState => [...prevState, appt])
      }
    })
  }
  
  useEffect(function() {
    async function getAll() {
      const appointments = await appointmentsAPI.getAll()
      if (user.isAdmin) {
        handleState(appointments);
      } else {
        const result = appointments.filter(appt => appt.user === user._id)
        handleState(result);
      }
    }
    getAll();
  }, [])

  async function handleUpdate(appointment) {
    const appt = await appointmentsAPI.changeStatus(appointment)
    console.log(appt);
  }
  
  const requests = requestedAppts.map((request, index) => (
    <RequestedAppt key={index} request={request} user={user} handleUpdate={handleUpdate}/>
  ))

  const confirms = confirmedAppts.map((confirm, index) => (
    <ConfirmedAppt key={index} confirm={confirm} user={user} handleUpdate={handleUpdate}/>
  ))

  const completes = completedAppts.map((complete, index) => (
    <CompletedAppt key={index} complete={complete} user={user} handleUpdate={handleUpdate}/>
  ))

  return (
    <div>
      <h1>Appointment History</h1>
      <div>
        <h2>Requested:</h2>
        {requests}
        <h2>Confirmed:</h2>
        {confirms}
        <h2>Completed:</h2>
        {completes}
      </div>
    </div>
  )
}
