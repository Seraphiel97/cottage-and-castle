const express = require('express');
const router = express.Router();
const appointmentsCtrl = require('../../controllers/api/appointments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



module.exports = router