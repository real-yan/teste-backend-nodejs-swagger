const SequelizeService = require('./SequelizeService')
const ProdutoModel = require('../models/Produto')

class ProdutoService {
    constructor(){
        this.DBServiceInstance = new SequelizeService(ProdutoModel)
    }

    create(body) {       
        return this.DBServiceInstance.create(body) 
    }

    findAllByCondition(condition) {
        return this.DBServiceInstance.findAll(condition)
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

module.exports = ProdutoService