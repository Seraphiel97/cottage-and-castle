const express = require('express');
const router = express.Router();
const appointmentsCtrl = require('../../controllers/api/appointments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/create', ensureLoggedIn, appointmentsCtrl.createAppointment)

router.get('/retrieve', ensureLoggedIn, appointmentsCtrl.getAll)

router.put('/status', appointmentsCtrl.changeStatus)

module.exports = router