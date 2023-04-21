import {useState, useEffect} from 'react'
import RequestedAppt from '../../components/RequestedAppt/RequestedAppt'
import ConfirmedAppt from '../../components/ConfirmedAppt/ConfirmedAppt'
import CompletedAppt from '../../components/CompletedAppt/CompletedAppt'
import * as appointmentsAPI from '../../utilities/appointments-api'


export default function AppointmentHistory({user}) {
  // These states hold appointment data fetched by the getAll function
  const [requestedAppts, setRequestedAppts] = useState([])
  const [confirmedAppts, setConfirmedAppts] = useState([])
  const [completedAppts, setCompletedAppts] = useState([])

  // Renders all appointments upon first render
  useEffect(function() {
    getAll();
  }, [])

  // Used by the getAll function to change the state to render updated info
  function handleState(data) {
    const requested = [];
    const confirmed = [];
    const completed = [];
    
    // data is coming from the JSON response of getAll function
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

  // Fetches all appointment data from server through AJAX, used by useEffect and handleUpdate
  async function getAll() {
    const appointments = await appointmentsAPI.getAll()
    if (user.isAdmin) {
      handleState(appointments);
    } else {
      const result = appointments.filter(appt => appt.user === user._id)
      handleState(result);
    }
  }

  // Finds and updates one appointment status, fetches updated information from server
  async function handleUpdate(appointment) {
    const appt = await appointmentsAPI.changeStatus(appointment)
    getAll();
  }
  
  // Maps state data to the component for rendering
  const requests = requestedAppts.map((request, index) => (
    <RequestedAppt key={index} request={request} user={user} handleUpdate={handleUpdate}/>
  ))

  // Maps state data to the component for rendering
  const confirms = confirmedAppts.map((confirm, index) => (
    <ConfirmedAppt key={index} confirm={confirm} user={user} handleUpdate={handleUpdate}/>
  ))

  // Maps state data to the component for rendering
  const completes = completedAppts.map((complete, index) => (
    <CompletedAppt key={index} complete={complete} user={user} handleUpdate={handleUpdate}/>
  ))

  return (
    <div className="text-center">
      <h1 className="my-6">Appointment History</h1>
      <div className="grid-rows-3 md:grid grid-cols-3">
        <div className="m-3 mborder-solid border-2 rounded-lg bg-gradient-to-b from-pink to-mint text-white">
          <h2 className="mb-6">Requested:</h2>
          {requests}
        </div>
        <div className="m-3 border-solid border-2 rounded-lg bg-gradient-to-t from-pink to-mint text-white">
          <h2 className="mb-6">Confirmed:</h2>
          {confirms}
        </div>
        <div className="m-3 border-solid border-2 rounded-lg bg-gradient-to-b from-pink to-mint text-white">
          <h2 className="mb-6">Completed:</h2>
          {completes}
        </div>
      </div>
    </div>
  )
}
