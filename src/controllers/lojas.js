const LojaService = require('../services/LojaService')
const LojaServiceInstance = new LojaService()

const retornaTodasLojas = (req, res) => {
    LojaServiceInstance.findAll().then((result) => {
        res.status(200).json(result)   
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar retornar as lojas do banco.")
    })
}

const retornaLoja = (req, res) => {
    LojaServiceInstance.findById(req.params.id).then((result) => {
        res.status(200).json(result)
    }).catch((error) => {
        console.log(error) 
        res.status(400).send("Houve um erro ao tentar retornar a loja do banco.")  
    })
}

const criaNovaLoja = (req, res) => {
    LojaServiceInstance.create({
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

const atualizaLoja = (req, res) => {
    LojaServiceInstance.update(req.body.id, {
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
        res.status(200).send("Loja alterada com sucesso com sucesso.")
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar alterar a loja no banco.")
    })
}

const removeLoja = (req, res) => {
    LojaServiceInstance.delete(req.body.id).then(() => {
        res.status(200).send("Loja removida com sucesso.")
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar remover a loja do banco.")
    })
}

module.exports = {retornaTodasLojas, retornaLoja, criaNovaLoja, atualizaLoja, removeLoja}