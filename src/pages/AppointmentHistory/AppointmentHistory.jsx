import {useState, useEffect} from 'react'
import RequestedAppt from '../../components/RequestedAppt/RequestedAppt'
import ConfirmedAppt from '../../components/ConfirmedAppt/ConfirmedAppt'
import CompletedAppt from '../../components/CompletedAppt/CompletedAppt'
import * as appointmentsAPI from '../../utilities/appointments-api'


export default function AppointmentHistory({user}) {
  
  const [requestedAppts, setRequestedAppts] = useState([])
  const [confirmedAppts, setConfirmedAppts] = useState([])
  const [completedAppts, setCompletedAppts] = useState([])

  useEffect(function() {
    getAll();
  }, [])

  function handleState(data) {
    const requested = [];
    const confirmed = [];
    const completed = [];
  
    data.forEach(appt => {
      if (appt.status === 'Requested') {
        requested.push(appt);
      } else if (appt.status === 'Confirmed') {
        confirmed.push(appt);
      } else if (appt.status === 'Completed') {
        completed.push(appt);
      }
    });
  
    setRequestedAppts(requested);
    setConfirmedAppts(confirmed);
    setCompletedAppts(completed);
  }

  async function getAll() {
    const appointments = await appointmentsAPI.getAll()
    if (user.isAdmin) {
      handleState(appointments);
    } else {
      const result = appointments.filter(appt => appt.user === user._id)
      handleState(result);
    }
  }

  async function handleUpdate(appointment) {
    const appt = await appointmentsAPI.changeStatus(appointment)
    console.log(appt);
    getAll();
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
