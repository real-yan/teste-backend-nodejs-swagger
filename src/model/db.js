const Sequelize = require('sequelize')
const settings = require('../../settings')

const sequelize = new Sequelize(settings.DB.NAME, 
    settings.DB.USERNAME, 
    settings.DB.PASSWORD, {
        host: settings.DB.HOST,
        dialect: settings.DB.DIALECT
    })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}