import sendRequest from './send-request';

const BASE_URL = '/api/appointments';

export function createAppointment(apptData) {
    return sendRequest(`${BASE_URL}/create`, 'POST', apptData)
  }

export function getAll() {
    return sendRequest(`${BASE_URL}/retrieve`)
}

export function changeStatus(appointment) {
  return sendRequest(`${BASE_URL}/status`, 'PUT', appointment)
}