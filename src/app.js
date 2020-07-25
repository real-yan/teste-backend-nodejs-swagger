// Carregando Módulos do Projeto
const express = require('express')
const bodyParser = require('body-parser')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require ('swagger-ui-express')
const settings = require('../settings')
const index = require('./routes/index')
const app = express()

// Configurações de Body Parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Configurações Swagger
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Teste Backend API",
            version: "1.0.0",
            description: "Teste Node.js para o cadastro de lojas e produtos.",
            contact: {
                name: "Yan Real"
            },
            basePath: "/api-doc",
            servers: ["https://"+ settings.ENV.HOST +":"+ settings.ENV.PORT]
        }
    },
    apis: ["./routes/lojas.js"]
}
const swaggerDocs = swaggerJSDoc(swaggerOptions)
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// Configuração Rotas
app.use(index)

// Execução do Server
app.listen(settings.ENV.PORT, () => {
    console.log("Servidor executando na porta " + settings.ENV.PORT +".")
})
