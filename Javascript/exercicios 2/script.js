function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var res = document.getElementById("res")
    var fano = document.getElementById("txtano")
   
    if(fano.value.length==0 || fano.value > ano){
    window.alert("Verifique os dados e tente novamente")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - fano.value
        var genero = " "
        var img = document.createElement("img")
        img.setAttribute("id","foto")
        if(fsex[0].checked){
            genero = "Homem"
            if(idade >=0 && idade <10 ){
                img.setAttribute("src","fotose2/bebehomem.jpg")

            }else if(idade<21){
                img.setAttribute("src","fotose2/jovemhomem.jpg")

            }else if(idade<50){
                img.setAttribute("src","fotose2/homemadulto.jpg")


            }else{
                img.setAttribute("src","fotose2/idosohomem.jpg")
            }
        }else if(fsex[1].checked){
            genero = "Mulher"
            
            if(idade >=0 && idade <10 ){
                img.setAttribute("src","fotose2/bebemulher.jpg")


            }else if(idade<21){
                img.setAttribute("src","fotose2/jovemmulher.jpg")

            }else if(idade<50){
                img.setAttribute("src","fotose2/mulheradulta.jpg")

            }else{
                img.setAttribute("src","fotose2/idosomulher.jpg")
                
            }

        }
        res.style.textAlign = "center"
        res.innerHTML = `indentificamos ${genero} de  ${idade} anos`
        res.appendChild(img)

            

        
    }
    

}