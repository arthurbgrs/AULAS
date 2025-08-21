console.log("MAIS UM DIA NE TRP")

// LAÇOS DE REPETIÇÃO

// PARA = FOR
/*
for(var i = 0; i < 10; i ++){
    console.log("erriessi")
    console.log("erriessi")
}
console.log("terminou por aqui")

// ENQUANTO = WHILE

var contagem = 0
while(contagem < 10){
    console.log("estou repetindo infinitamente rs");
    contagem++
}
/*
var numero = prompt("DIGITE UM NUMERO INTEIRO POSITIVO: ")
for(var i = 0; i <= numero; i++){
    console.log("contagem: " , i)
    
}
*/

/*
var senha = "0"
while(senha != "2026"){
    var senha = prompt("DIGITE SUA SENHA! dica: o Brasil ganhou uma copa esse ano rs: ")
}
console.log("você entrou")
*/


// FUNÇÕES
//CRIA A FUNÇÃO
/*
function bemVindo(){
    var nome = prompt("Nome: ")
    console.log("Ola, ", nome)
}
//CHAMA A FUNÇÃO
bemVindo()


//FUNÇÃO COM PARAMETROS
function calcularIdade(idade){
    alert("sua idade é: ", +idade)
}

calcularIdade(18)
calcularIdade(100)

var valor1 = Number(prompt("escreva um numero: "))
var valor2 = Number(prompt("escreva outro numero: "))
function Maior(volor1, volor2){
    if(volor1 > volor2){
        console.log("o primerio numero é o maior")
    }
    else if(volor1 < volor2){
        console.log("o segundo numero é o maior")
    }
    else{
        console.log("os numeros são iguais")
    }

}
Maior(valor1, valor2)
*/



// FUNÇÕES COM RETORNO

function soma(valor1, valor2){
   let resultado = valor1 + valor2
   
   return resultado
}
var valorSomado = soma(7,6)

console.log("A soma deu: ", valorSomado)