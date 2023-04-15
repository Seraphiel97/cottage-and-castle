const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema ({
user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
},
baseService: {
    type: Schema.Types.ObjectId,
    ref: 'BaseService',
    required: true,
},
address: {
    type: String,
    required: true,
},
status: {
    type: String,
    default: "Requested"
},
date: {
    type: Date,
    required: true
},
scrubScale: {
    type: Number,
    required: true,
}
}, {
    timestamps: true,
})

module.exports = mongoose.model('Appointment', appointmentSchema)