const Sequelize = require('sequelize')
const config = require('../config')

const sequelize = new Sequelize(config.DB.NAME, 
    config.DB.USERNAME, 
    config.DB.PASSWORD, {
        host: config.DB.HOST,
        dialect: config.DB.DIALECT
    })

module.exports = {Sequelize, sequelize}