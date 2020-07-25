const SequelizeService = require('./SequelizeService')
const LojaModel = require('../models/Loja')

class LojaService {
    constructor(){
        this.DBServiceInstance = new SequelizeService(LojaModel)
    }

    create(body) {       
        return this.DBServiceInstance.create(body) 
    }

    findAll() {
        return this.DBServiceInstance.findAll()
    }

    findById(id) {
        return this.DBServiceInstance.findById(id)    
    }

    update(id, body) {
        return this.DBServiceInstance.update(id, body)
    }

    delete(id) {
        return this.DBServiceInstance.delete(id)     
    }
} 

module.exports = LojaService