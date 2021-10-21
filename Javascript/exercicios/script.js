
function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var data2= new Date()
    var hora = data.getHours()
    var minuto = data2.getMinutes()
   
    
    
    msg.innerHTML= `agora são ${hora} horas e ${minuto} minutos`
    if (hora >=0 && hora < 12){
        img.src="fotose/manha.jpg"
        document.body.style.background  = "#EBE9EA"

    }else if(hora>=12 && hora < 18) {
        img.src="fotose/tarde.jpg"
        document.body.style.background = "#FCC1A1"

    }else{
        img.src="fotose/noite.jpg"
        document.body.style.background = "#214170"

    }
    

    

}

