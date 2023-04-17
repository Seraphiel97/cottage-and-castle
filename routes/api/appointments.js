const express = require('express');
const router = express.Router();
const appointmentsCtrl = require('../../controllers/api/appointments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/create', appointmentsCtrl.createAppointment)

router.get('/requests', ensureLoggedIn, appointmentsCtrl.getRequested)

router.get('/confirms', ensureLoggedIn, appointmentsCtrl.getConfirmed)

router.get('/completes', ensureLoggedIn, appointmentsCtrl.getCompleted)


module.exports = router