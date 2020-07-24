require("dotenv").config({silent: true})

module.exports = {
    ENV: {
        HOST: 'localhost',
        PORT: 3000
    },   
    DB: {
        DIALECT: 'mysql',
        HOST: 'localhost',
        NAME: 'testebackend',
        USERNAME: 'root',
        PASSWORD: 'Sol2019!'
    }
}