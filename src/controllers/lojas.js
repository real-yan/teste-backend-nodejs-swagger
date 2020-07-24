const Loja = require('../models/Loja')

const getAll = (req, res) => {
    Loja.findAll().then((result) => {
        console.log("Lojas retornadas com sucesso.")
        res.json(result)   
    }).catch((error) => {
        console.log("Houve um erro ao tentar retornar as lojas do banco.")
        console.log(error)
    })
}

const getById = (req, res) => {
    Loja.findByPk(req.params.id).then((result) => {
        console.log("Loja "+ result.nome +" retornada com sucesso.")
        res.json(result)
    }).catch((error) => {
        console.log("Houve um erro ao tentar retornar a loja do banco.")
        console.log(error)   
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
        console.log("Loja salva com sucesso.")
        res.json(result)
    }).catch((error) => {
        console.log("Houve um erro ao tentar salvar a loja no banco.")
        console.log(error)
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
            id: req.params.id    
        }
    }).then((result) => {
        console.log("Loja alterada com sucesso com sucesso.")
        res.json(result)
    }).catch((error) => {
        console.log("Houve um erro ao tentar alterar a loja no banco.")
        console.log(error)
    })
}

const remove = (req, res) => {
    Loja.destroy({
        where: {
            id: req.body.id
        }
    }).then(() => {
        console.log("Loja removida com sucesso.")
        res.json(result)
    }).catch((error) => {
        console.log("Houve um erro ao tentar remover a loja do banco.")
        console.log(error)
    })
}

module.exports = {getAll, getById, create, update, remove}