const Appointment = require('../../models/appointment')

module.exports = {
    createAppointment,
    getAll
}

async function createAppointment(req, res) {
    try {
        const appt = await Appointment.create(req.body);
        console.log(appt);
        res.json(appt)
    } catch (err){
        res.status(err).json(err);
    }
}

async function getAll(req, res) {

}