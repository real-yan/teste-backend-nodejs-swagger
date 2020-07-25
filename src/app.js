// Carregando Módulos do Projeto
const express = require('express')
const bodyParser = require('body-parser')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require ('swagger-ui-express')
const config = require('./config')
const index = require('./routes/index')
const app = express()

// Configurações de Body Parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Configurações Swagger
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: config.PROJ.TITLE,
            version: config.PROJ.VERSION,
            description: config.PROJ.DESCRIPTION,
            contact: {
                name: config.PROJ.OWNER
            },
            basePath: config.ENV.BASEPATH,
            servers: ["https://"+ config.ENV.HOST +":"+ config.ENV.PORT]
        }
    },
    apis: ["./routes/lojas.js", "./routes/produtos.js"]
}
const swaggerDocs = swaggerJSDoc(swaggerOptions)
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// Configuração Rotas
app.use(index)

// Execução do Server
app.listen(config.ENV.PORT, () => {
    console.log("Servidor executando na porta " + config.ENV.PORT +".")
})
