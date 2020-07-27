# Teste de Backend utilizando Nodejs para elaboração de uma API RESTful e sua documentação
O intuito desta aplicação é desenvolver uma API REST via Node.js e documentá-la via Swagger. Para desenvolver a aplicação foi utilizado o framework Express.

O projeto em si constitui-se por uma aplicação web para o cadastro, alteração e remoção de lojas e produtos de uma determinada empresa.

## Instalação
Para instalar esta aplicação, é necessário primeiramente ter o NodeJS instalado na máquina. Feito isso, basta clonar o repositório em um diretório local e instalar as dependências referenciadas no package.json via npm.

```bash
npm install
```

## Execução
Para executar a aplicação, basta utilizar o Node para rodar o arquivo ```app.js``` encontrado na pasta ```src/```.

```bash
node app.js
```

Por padrão, a execução é realizada na porta ```3000```, mas essa informação pode ser configurada no arquivo ```settings.js```.

## Detalhes da API
A API é disponibilizada atrvés dos seguintes endpoints:

Endpoint para acesso à documentação do Swagger
```
GET /api-doc
```

Endpoint para cadastrar uma nova loja.
```
POST /lojas/adicionar 
Body: {
    "nome": String (Obrigatório),
    "cnpj": String (Obrigatório),
    "rua": String (Obrigatório),
    "numero": Integer (Obrigatório),
    "bairro": String (Obrigatório),
    "complemento": String,
    "cidade": String (Obrigatório),
    "uf": String (Obrigatório),
    "telefone": String,
    "email": String,
    "responsavel": String
}
```

Endpoint para retorno de todas as lojas cadastradas.
```
GET /lojas
```

Endpoint para o retorno de uma loja em específico.
```
GET /loja/{id}
```

Endpoint para alteração de uma loja cadastrada.
```
POST /lojas/alterar/{id}
Body: {
  "nome": String (Obrigatório),
  "cnpj": String (Obrigatório),
  "rua": String (Obrigatório),
  "numero": Integer (Obrigatório),
  "bairro": String (Obrigatório),
  "complemento": String,
  "cidade": String (Obrigatório),
  "uf": String (Obrigatório),
  "telefone": String,
  "email": String,
  "responsavel": String
}
```

Endpoint para remoção de uma loja.
```
POST /lojas/remover
Body: {
  "id": Integer (Obrigatório)
}
```

Endpoint para cadastrar um novo produto.
```
POST /produtos/adicionar 
Body: {
  "lojaId": Integer (Obrigatótio),
  "codigo": Integer (Obrigatótio),
  "nome": String (Obrigatório),
  "classificacao": String (Obrigatório),
  "quantidade": Integer (Obrigatótio),
  "valor": Number (Obrigatório)
}
```

Endpoint para retorno de todos os produto cadastradas de uma loja.
```
GET /produtos/{lojaid}
```

Endpoint para o retorno de um produto em específico.
```
GET /produtos/{id}
```

Endpoint para alteração de um produto cadastrado.
```
POST /produtos/alterar/{id}
Body: {
  "lojaId": Integer (Obrigatótio),
  "codigo": Integer (Obrigatótio),
  "nome": String (Obrigatório),
  "classificacao": String (Obrigatório),
  "quantidade": Integer (Obrigatótio),
  "valor": Number (Obrigatório)
}
```

Endpoint para remoção de um produto.
```
POST /produtos/remover
Body: {
  "id": Integer (Obrigatório)
}
```
