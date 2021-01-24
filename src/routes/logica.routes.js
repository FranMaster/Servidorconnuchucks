const express =require('express')
const ruta=express.Router()
const   {verificarUsurio}  =require('../middlewares/logica.middlewares')

ruta.get('/',verificarUsurio,(req,res)=>{
    res.json({mensaje:'estamos usando routes'})
});
ruta.post('/',(req,res)=>{

});
ruta.put('/',(req,res)=>{

});

ruta.delete('/',(req,res)=>{

});

module.exports=ruta
