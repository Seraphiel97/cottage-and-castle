const Appointment = require('../../models/appointment')
const User = require('../../models/user')

module.exports = {
    createAppointment,
    getAll,
}

async function createAppointment(req, res) {
    try {
        const appt = await Appointment.create(req.body);
        await appt.save();
        res.json(appt)
    } catch (err){
        res.status(err).json(err);
    }
}

async function getAll(req, res) {
    try {
        const appointments = await Appointment.find({})
        res.json(appointments)
    } catch (err) {
        res.status(err).json(err);
    }
}