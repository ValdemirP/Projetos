// divisível por 3 = fizz
// divisível por 5 = buzz
// divisivel por 3 e 5 = fizzbuzz
// Não divisível por 3 e 5 = entrada
// Não é um numero = ´Não é um numero´

const resultado = fizzbuzz(1);
console.log(resultado)



function fizzbuzz(entrada){
if (typeof entrada !== "number")
      return "Não é um numero";
if(entrada % 3===0 && entrada % 5 === 0) 
      return "Fizzbuzz";   
if (entrada % 3===0) 
      return "Fizz";
if (entrada % 5===0)
    return "Buzz";
if(entrada % 3===0 && entrada % 5 === 0) 
    return "Fizzbuzz";      
return "temte novamente";  
 }

