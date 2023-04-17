import sendRequest from './send-request';

const BASE_URL = '/api/appointments';

export function createAppointment(apptData){
    return sendRequest(`${BASE_URL}/create`, 'POST', apptData)
  }