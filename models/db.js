const Mdb = require('sequelize')
// const db_ = require('../index.js')
const mdb = new Mdb('postapp', 'root', 'Protechoper2!', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Mdb: Mdb,
    mdb: mdb
}
// mdb.authenticate().then(()=>{
//     console.log('Sucesso ao se conectar com base de dados!')
// }).catch((err)=>{
//     console.log('Erro ao se conectar com base de dados: ', err);
// })