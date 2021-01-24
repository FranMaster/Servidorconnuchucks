const express =require('express')
const ruta=express.Router()

ruta.get('/', (req, res) => {
    res.render('index',{saludo:'Hola Fede',lista:[{nombre:'fran'},{nombre:'fede'},{nombre:'camilo'}]})
});

ruta.get('/about', (req, res) => {
    res.render('about',{saludo:'Hola Fede',lista:[{nombre:'fran'},{nombre:'fede'},{nombre:'camilo'}]})
});

ruta.get('/contactos', (req, res) => {
    res.render('contactos',{saludo:'Hola Fede',lista:[{nombre:'fran'},{nombre:'fede'},{nombre:'camilo'}]})
});

module.exports=ruta