import {useState, useEffect} from 'react'
import RequestedAppt from '../../components/RequestedAppt/RequestedAppt'
import ConfirmedAppt from '../../components/ConfirmedAppt/ConfirmedAppt'
import CompletedAppt from '../../components/CompletedAppt/CompletedAppt'
import * as appointmentsAPI from '../../utilities/appointments-api'


export default function AppointmentHistory() {
  
  const [requestedAppts, setRequestedAppts] = useState([])
  const [confirmedAppts, setConfirmedAppts] = useState([])
  const [completedAppts, setCompletedAppts] = useState([])

  useEffect(function() {
    async function getRequested() {
      const requested = await appointmentsAPI.getRequested();
      setRequestedAppts(requested);
    }
  }, []);

  useEffect(function() {
    async function getConfirmed() {
      const confirmed = await appointmentsAPI.getConfirmed();
      setConfirmedAppts(confirmed);
    }
  }, []);

  useEffect(function() {
    async function getCompleted() {
      const completed = await appointmentsAPI.getCompleted();
      setCompletedAppts(completed);
    }
  }, []);
  
  const requests = requestedAppts.map((request, index) => (
    <RequestedAppt key={index} request={request}/>
  ))

  const confirms = confirmedAppts.map((confirm, index) => (
    <ConfirmedAppt key={index} confirm={confirm}/>
  ))

  const completes = completedAppts.map((complete, index) => (
    <CompletedAppt key={index} complete={complete}/>
  ))

  return (
    <div>
      <h1>Appointment History</h1>
      <div>
        {requests}
        {confirms}
        {completes}
      </div>
    </div>
  )
}
