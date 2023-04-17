const Appointment = require('../../models/appointment')
const User = require('../../models/user')

module.exports = {
    createAppointment,
    getAll,
    getRequested,
    getConfirmed,
    getCompleted,
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

async function getRequested(req, res) {
    try {
        const appts = await Appointment.find({status: 'Requested'})
        res.json(appts)
    } catch (err) {
        res.status(err).json(err);
    }
}

async function getConfirmed(req, res) {
    
}

async function getCompleted(req, res) {
    
}

async function getAll(req, res) {

}