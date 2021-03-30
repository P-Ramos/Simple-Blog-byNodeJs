const Express = require('express')
const IndPort = require('./index.js')
const app = Express()

const handlebars =  require('express-handlebars');

//config
// Template engine handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');




app.listen(IndPort.thisPort, () => {
    console.log('Ligação da aplicação verificada na porta: ', IndPort.thisPort);
})