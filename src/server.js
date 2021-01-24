const express = require('express')
const path = require('path');
const morgan=require('morgan')
const nunjucks=require('nunjucks')
const app = express()
const rutasNavegacion=require('./routes/navegacion.routes')
const rutasLogicas=require('./routes/logica.routes')
app.use(express.json())
//Motor de vistas
app.set('view engine','html')
app.engine('html',nunjucks.render)
//nunjucks.configure('views') // la primera sirve cuando la carpeta views este la ruta principal
//
app.use(express.static(path.resolve(__dirname, 'public')))
var env = nunjucks.configure([path.resolve(__dirname,'views')], { // sirve para cualquier ruta
    autoescape: true, 
    express: app
});



const PORT = 5000

app.use('/',rutasNavegacion)
app.use('/logicas',rutasLogicas)




app.listen(PORT, (err) => {
    let mensaje = `Ocurrio un error iniciando Servidor en el puerto :${PORT} :: error: err`
    if (!err) {
        mensaje = `Servidor Corriendo en el puerto :${PORT}`
    }
    console.log(mensaje);
})
