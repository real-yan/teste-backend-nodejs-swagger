const Loja = require('../models/Loja')

const getAll = (req, res) => {
    Loja.findAll().then((result) => {
        res.status(200).json(result)   
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar retornar as lojas do banco.")
    })
}

const getById = (req, res) => {
    Loja.findByPk(req.params.id).then((result) => {
        res.status(200).json(result)
    }).catch((error) => {
        console.log(error) 
        res.status(400).send("Houve um erro ao tentar retornar a loja do banco.")  
    })
}

const create = (req, res) => {
    Loja.create({
        nome: req.body.nome,
        matriz: req.body.matriz,
        cnpj: req.body.cnpj,
        inscrestadual: req.body.inscrestadual,
        inscrmunicipal: req.body.inscrmunicipal,
        rua: req.body.rua,
        numero: req.body.numero,
        bairro: req.body.bairro,
        complemento: req.body.complemento,
        cidade: req.body.cidade,
        uf: req.body.uf,
        telefone: req.body.telefone,
        email: req.body.email,
        responsavel: req.body.responsavel,
        obs: req.body.obs
    }).then((result) => {
        res.status(201).send("Loja salva com sucesso.")
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar salvar a loja no banco.")
    })
}

const update = (req, res) => {
    Loja.update({
        nome: req.body.nome,
        matriz: req.body.matriz,
        cnpj: req.body.cnpj,
        inscrestadual: req.body.inscrestadual,
        inscrmunicipal: req.body.inscrmunicipal,
        rua: req.body.rua,
        numero: req.body.numero,
        bairro: req.body.bairro,
        complemento: req.body.complemento,
        cidade: req.body.cidade,
        uf: req.body.uf,
        telefone: req.body.telefone,
        email: req.body.email,
        responsavel: req.body.responsavel,
        obs: req.body.obs
    }, {
        where: {
            id: req.body.id    
        }
    }).then((result) => {
        res.status(200).send("Loja alterada com sucesso com sucesso.")
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar alterar a loja no banco.")
    })
}

const remove = (req, res) => {
    Loja.destroy({
        where: {
            id: req.body.id
        }
    }).then(() => {
        res.status(200).send("Loja removida com sucesso.")
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar remover a loja do banco.")
    })
}

module.exports = {getAll, getById, create, update, remove}