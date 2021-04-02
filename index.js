const http   = require('http');
const thServ = http.createServer()
const thisPort = 3000;
const Post = require('./models/Post')
const Handlebars = require('handlebars')

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
        Post.all( './views/layout/home', function(req, res, next){
            next()
        }).then(function(posts){
            // res.render('home', {nome: 'Prota', snome: 'Ramos'})
            res.render('home', {posts: posts})
        })
        res.end()
    })

    app.get('/cad', function(req, res){
        res.render('form.handlebars')
    })//961055256 - Walker
    // Posts                      ««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
    app.post('/add', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            s_titulo: req.body.s_titulo,
            conteudo: req.body.conteudo
        })
        .then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send('Erro ao gerar a postagem: '+ erro)
        })
    }) 





// «««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
// module.exports
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