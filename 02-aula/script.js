// Interação com o usuario via prompt
/*
var nome = prompt("digite um nome: ")

alert("Seu nome é: " + nome)
*/
//CONDICIONAIS

// SE, SENÃO SE, SENÃO
// IF, IF ESLSE, ELSE

var estaVivo = true

if(estaVivo == true){
    console.log("Parece que você esta vivo rs")
}
else if(estaVivo == false){
    console.log("Voce está morto, abestalhado")
}
else{
    console.log("Você é problematico")
}

// ESCOLHA / CASO
// SWITCH / CASE
var corCamisa = "Amarela"

switch(corCamisa){
    case "Azul" : 
    console.log("Você é tope")
    break
    case "Amarela" : 
    console.log("Você vai ganhar um convite para a turma do Hytalo santos")
    break
    case "Vermelho" : 
    console.log("Ganhou tudo oque quiser")
    break
    default:
        console.log("cor de camisa invalida")
        break

}
/*
var nota = prompt("DIGITE SUA NOTA: ")
if(nota > 6){
    console.log("Você passou direto! seu atrevido")
}
else if(nota >= 5){
    console.log("Você esta de recuperação!! seu animalesco")
}
else{
    console.log("Sem palavras para essa sua reprovação!")
}
*/
var idade = prompt("QUAL A SUA IDADE: ")
var idade2 = prompt("QUAL A SUA IDADE: ")
var ingresso, ingresso2

if(idade <= 17){
    ingresso1 = 15
}   
else if(idade < 60){
    ingresso1 = 30
}
else{
    ingresso1 = 20
    
}
if(idade2 <= 17){
    ingresso2 = 15
}   
else if(idade2 < 60){
    ingresso2 = 30
}
else{
    ingresso2 = 20
    
}
var reais = Number(ingresso1) + Number(ingresso2)
console.log("sera pago " + reais)