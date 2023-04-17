import sendRequest from './send-request';

const BASE_URL = '/api/appointments';

export function createAppointment(apptData){
    return sendRequest(`${BASE_URL}/create`, 'POST', apptData)
  }

export function getRequested() {
    return sendRequest(`${BASE_URL}/requests`)
}

export function getConfirmed() {
    return sendRequest(`${BASE_URL}/confirms`)
}

export function getCompleted() {
    return sendRequest(`${BASE_URL}/completes`)
}