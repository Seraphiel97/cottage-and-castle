const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const baseServiceSchema = new Schema({
    name: String,
    dusting: Boolean,
    floors: Boolean,
    kitchenSurfaces: Boolean,
    bathroomSurfaces: Boolean,
    cabinetCleaning: Boolean,
    ovenDegrease: Boolean,
    refrigeratorInterior: Boolean,
    interiorWindows: Boolean,
    baseboards: Boolean,
    organization: Boolean,
    price: Number,
}, {
    timestamps: true,
})

module.exports = mongoose.model('BaseService', baseServiceSchema);