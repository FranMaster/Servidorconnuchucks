let verificarUsurio= (req,res,next)=>{

    res.status(200).json({mensaje:'he detenido el flujo'})

    
}
let verificarUsurio2= (req,res,next)=>{
    console.log('estoy usando un middleware 2')
    next()
}
let verificarUsurio3= (req,res,next)=>{
    console.log('estoy usando un middleware 3')
    next()
}
let verificarUsurio4= (req,res,next)=>{
    console.log('estoy usando un middleware 4')
    next()
}

module.exports={verificarUsurio,verificarUsurio2,verificarUsurio3,verificarUsurio4}