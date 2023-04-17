const Service = require('../../models/baseService')

module.exports = {
    getServices,
}

async function getServices(req, res) {
    try {
        const services = await Service.find({});
        res.json(services)  
    } catch (err) {
        res.status(err).json(err)
    }
}