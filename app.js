require('dotenv').config()
const express = require('express')
const cors = require("cors")
const { app, server } = require("./backend/app/socket/socket")
const { dbConnect } = require('./backend/config/mongo')

dbConnect()

const PORT = process.env.PORT || 3000


app.use(express.json())
app.use(cors())
app.use('/public', express.static(`${__dirname}/storage/imgs`))
console.log(__dirname)
console.log("hola" + __dirname);
app.use('/comentarios', require("./backend/app/routes/comentario"))
app.use('/publicaciones', require("./backend/app/routes/publicaciones"))
app.use('/users', require("./backend/app/routes/users"))
app.use('/login', require("./backend/app/routes/login"))
app.use('/likes', require("./backend/app/routes/likes"))
app.use('/compartido', require("./backend/app/routes/compartidos"))
app.use('/pagos', require("./backend/app/routes/pagos"))
app.use('/estadoOnline', require("./backend/app/routes/estadoOnline"))
app.use('/amistad', require("./backend/app/routes/amistad"))
app.use('/mensajes', require('./backend/app/routes/mensajes'))
app.use('/recuperarPassword', require("./backend/app/routes/recuperarPassword"))



server.listen(PORT, ()=>{
    console.log('La API esta lista');
})