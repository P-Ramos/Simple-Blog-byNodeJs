const db = require('./db')

const Post = db.mdb.define('postagens', {
    titulo:{
        type: db.Mdb.STRING
    },
    s_titulo:{
        type: db.Mdb.STRING
    },
    conteudo:{
        type: db.Mdb.TEXT
    }
})
// Post.sync({force: true})
module.exports = Post;