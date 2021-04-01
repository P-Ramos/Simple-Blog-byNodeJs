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

    // Template engine handlebars ««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
    const handlebars =  require('express-handlebars');
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars');

    // Body-parser                ««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
    const bodyParser = require('body-parser');
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
    // Posts                      ««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
    app.post('/add', function(req, res){
        res.send('Título: ' +req.body.titulo+ '<br/>Sub-título: ' +req.body.s_titulo+ '<br/>Conteudo:<br/>' +req.body.conteudo)
    }) 





// «««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
// module.exports
    module.exports = {
        dbLoader
    }
// «««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
// «««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
// «««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
// Verificação de conecção        ««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
    
    // Express
    app.listen(thisPort, () => {
        console.log('Ligação da aplicação verificada na porta: ', thisPort);
    })

    // Server
    thServ.listen(thisPort, 'localhost',(err) => {
        if(err){console.log(err)}else console.log('Server connected successfully!')
    })