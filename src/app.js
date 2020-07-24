// Carregando Módulos do Projeto
const express = require('express')
const bodyParser = require('body-parser')
const settings = require('../settings')
const index = require('./routes/index')
const app = express()

// Configurações de Body Parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Configuração Rotas
app.use(index)

// Execução do Server
app.listen(settings.ENV.PORT, () => {
    console.log("Servidor executando na porta " + settings.ENV.PORT +".")
})
