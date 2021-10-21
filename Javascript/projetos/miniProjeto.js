//velocidade maxima de até 70km
// a cada 5 km acima do limte vc ganha um ponto na carteira
// math.floor()
// Caso os pontos sejam maior que 12 a carteira e suspendida


verificarVelocidade(95)

function verificarVelocidade(velocidade){
    if(velocidade <= 70){
       console.log("ok")  
    }else{
        const pontos = ((velocidade - 70) /5 )
        if(pontos >= 12)
        console.log("Carteira suspensa")
        else
           console.log(`Voçe perdeu`,pontos,"pontos na carteira")
    }   
    
    
      

}