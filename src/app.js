const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('./config/swaggerDocs')
const settings = require('./config/settings')
const index = require('./routes/index')
const app = express()

/**
 * Configuração do Body Parser
 */
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

/** 
 * Configuração do Swagger 
*/
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

/** 
 * Configuração das Rotas
*/
app.use(index)

/** 
 * Inicialização do servidor
*/
app.listen(settings.ENV.PORT, () => {
    console.log("Servidor executando na porta " + settings.ENV.PORT +".")
})
