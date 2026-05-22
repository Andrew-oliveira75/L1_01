const express = require("express");
const router = express.Router();


router.get("/", (req, res)=>{
    res.render("pages/index",  {"retorno":null, "valores":{"idade":""}});
})


router.post("/classificar", (req, res)=>{

    //recuperar dados do formulário
    let idade = parseInt(req.body.idade);

    //realizar a manipulação
    if(idade>=5 && idade<=7){
        var categoria = "Infantil A";
    }else if(idade>=8 && idade<=10){
        var categoria = "Infantil B";
    }else if(idade>=11 && idade<=13){
        var categoria = "Juvenil A";
    }else if(idade>=14 && idade<=17){
        var categoria = "Juvenil B";
    }else if(idade>=18){
        var categoria = "Senior";
    }else{
        var categoria = "Idade não classificada";
    }    
        
    //formatar os dados resultantes
    let objJson = {"categoria": categoria}

    //enviar os dados para mesclar com o html
    res.render("pages/index", {"retorno":objJson, "valores":{"idade":req.body.idade}})

})



module.exports = router;