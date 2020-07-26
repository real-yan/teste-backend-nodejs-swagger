# Teste de Backend utilizando Nodejs com Swagger

O intuito deste projeto é o teste das habilidades do profissional em desenvolver o backend de uma aplicação utilizando Node.js em conjunto com o banco de dados MySQL e documentação Swagger.

O projeto em si é constituido por uma API Restful para o cadastro, alteração e remoção de lojas e produtos de uma determinada empresa.

## Instalação

Utilizar o npm para realizar a instalação dos módulos da aplicação referênciadas no ```package.json```.

```bash
npm install
```

O banco de dados não necessita ser configurado localmente visto que a aplicação aponta para uma base de dados em cloud no Amazon RDS

## Execução

Executar a aplicação encontrada na pasta ```src/```

```bash
node app.js
```

Por padrão, a execução é realizada na porta ```3000```, mas essa informação pode ser configurada no arquivo ```settings.js```.
Ao acessar a url do projeto, a aplicação redirecionará diretamente para a documentação da API do Swagger.

