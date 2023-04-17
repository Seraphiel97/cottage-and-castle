const express = require('express');
const router = express.Router();
const appointmentsCtrl = require('../../controllers/api/appointments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/create', appointmentsCtrl.createAppointment)
// router.get('/history', appointmentsCtrl.getAll)

module.exports = router