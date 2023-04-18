const Appointment = require('../../models/appointment')
const User = require('../../models/user')

module.exports = {
    createAppointment,
    getAll,
    changeStatus,
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

async function changeStatus(req, res) {
    try {
        if (req.body.status === "Requested") {
            const appt = await Appointment.updateOne({date: req.body.date}, {status: 'Confirmed'})
            res.json(appt);
        } else if (req.body.status === "Confirmed") {
            const appt = await Appointment.updateOne({date: req.body.date}, {status: 'Completed'})
            res.json(appt);
        } else if (req.body.status === "Completed") {
            const appt = await Appointment.updateOne({date: req.body.date}, {status: 'Confirmed'})
            res.json(appt);
        }
    } catch (err) {
        res.status(err).json(err);
    }
}