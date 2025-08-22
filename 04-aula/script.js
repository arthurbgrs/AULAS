// VETOR = ARRAY
/*
var alunos = ["Neymar", "Messi", "Hytalo Santos", "Bam Bam"]

// MOSTRA ELEMENTOS DO ARRAY
console.log(alunos)

// MOSTRA UMA POSIÇÃO ESPECIFICA DO ARRAY
console.log(alunos[2])

// TROCA UM VALOR
alunos["3"] = "Manuel Gomes"
console.log(alunos)

// ARRAY COM VALORES DE VARIOS TIPOS
var aleatorio = ["roda gigante", 8 , "frozen", 1.5, 3, false, "magrelinho", "SCAR DOURADA"]

// LOOP PARA MOSTRAR TODOS OS VALORES DO ARRAY
for(var i = 0; i < 7; i++){
    console.log(aleatorio[i])
}
for(var i = 0; i < aleatorio.length; i++){
    console.log(aleatorio[i])
}
// INDEX = NUMERO DA CAIXA NO ARRAY
var times = ["flamengo", "Vitoria", "ibis", "Botafogo de SP", ]
for(var index in times){
    console.log(index) // MOSTRAR O NUMERO DA CAIXNHA QUE DESCOBRIU
    console.log(times[index]) // MOSTRA O VALOR QUE TEM DENTRO DA CAIXINHA


}



var nomes = prompt("digite um nome")
for(var i = 6; i >= nomes.length; i--){
    console.log(nomes[i])
}
*/

// MANIPULANDO ARRAYS
var frutas = ["maça", "uva", "pera"];
console.log(frutas);

// PUSH ADICIONA UM VALOR NO FIM DO ARRAY
frutas.push("Mamão");
console.log(frutas);

// POP - TIRA O ULTIMO ELEMENTO DA LISTA E RETORNA
var frutaTirada = frutas.pop();
console.log(frutaTirada);

// SHIFT - TIRA O PRIMEIRP ELEMENTO DA LISTA
var primeiraFruta = frutas.shift();
console.log(primeiraFruta);


// UNSHIFT - ADICIONA UM VALOR OU MAIS NO INICIO DO ARRAY
var novaFruta = "manga"
frutas.unshift(novaFruta)
console.log(frutas)