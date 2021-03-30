const dbSql = require('sequelize');
const aixenderinixoberufux = require('./index')
const dbsql = new dbSql('SISTEMADEPOSTAGENS', 'root', aixenderinixoberufux.dbLoader, {
    host:'localhost',
    dialect:'mysql'
})

//criação de tabelas
const Postagem = dbsql.define('postagens',{
    titulo: {
        type: dbSql.STRING
    },
    s_titulo: {
        type: dbSql.STRING
    },
    conteudo: {
        type: dbSql.TEXT
    }
})

// Postagem.sync({force: true})

const Usuario = dbsql.define('usuarios',{
    p_nome: {
        type: dbSql.STRING
    },
    s_nome: {
        type: dbSql.STRING
    },
    email: {
        type: dbSql.STRING
    },
    genero: {
        type: dbSql.STRING
    },
    p_passe: {
        type: dbSql.STRING
    },
    nasc_dia: {
        type: dbSql.INTEGER
    },
    nasc_mes: {
        type: dbSql.INTEGER
    },
    nasc_ano: {
        type: dbSql.INTEGER
    }
})
// Usuario.sync({force: true})


// preenchimento das tabelas
// Postagem.create({
//     titulo: 'Meu título',
//     s_titulo: 'Meu sub-título',
//     conteudo: 'Meu conteudo'
// })


dbsql.authenticate().then(()=>{
    console.log('Sucesso ao se conectar com base de dados!')
}).catch((err)=>{
    console.log('Erro ao se conectar com base de dados: ', err);
})