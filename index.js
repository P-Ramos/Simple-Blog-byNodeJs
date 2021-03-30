const http   = require('http');
const thServ = http.createServer((req, res) => {
    console.log('There was a moviment...')
    res.end();
})
const thisPort = 40000;
const dbLoader = 'Protechoper2!'

// config                         ««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
    // Express                    ««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
    const Express = require('express')
    const app = Express()

    // MYSQL conecting            ««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
    const dbSql = require('sequelize');
    const dbsql = new dbSql('SISTEMADEPOSTAGENS', 'root', dbLoader, {
        host:'localhost',
        dialect:'mysql'
    })

    // Template engine handlebars ««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
    const handlebars =  require('express-handlebars');
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars');

    // Body-parser                ««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
    const bodyParser = require('body-parser');
    
    // app.use(bodyParser.urlencoded({ extendend: false}))
    // app.use(bodyParser.json())
    // app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json())

    // Rotas                      ««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
    app.get('/', function(req, res){
        res.send('Home')
    })
    app.get('/cad', function(req, res){
        res.render('form.handlebars')
    })




// ««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
// ««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
// ««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
// ««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
// Verificação de conecção ««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
    
    // Express
    app.listen(thisPort, () => {
        console.log('Ligação da aplicação verificada na porta: ', thisPort);
    })

    // MYSQL
    dbsql.authenticate().then(()=>{
        console.log('Sucesso ao se conectar com base de dados!')
    }).catch((err)=>{
        console.log('Erro ao se conectar com base de dados: ', err);
    })

    // Server
    thServ.listen(thisPort, 'localhost',(err) => {
        if(err){console.log(err)}else console.log('Server connected successfully!')
    })