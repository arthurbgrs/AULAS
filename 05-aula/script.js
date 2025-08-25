console.log("oi")

// COM ARRAY

var alunos = ["pedro", "tiago", "joão"]
var media = [7,8,9]

console.log  ("O aluno: " ,alunos[1], "teve a media de: ", media[1])


// COM OBJETO
var estudante = {
    "nome" : "ney",
    nota1 : 8,
    nota2 : 9,
    media : 8.5,


}

console.log(estudante.nome , estudante.media, estudante.nota1 , estudante.nota2)

// CRIE UM OBJETO DA ESCOLA, COM 4 PROPRIEDADES
var apagador = {
    funcao : "apagar",
    material : "escolar",
    cor : "azul", 
    ingles : "eraser",

}
console.log(apagador.ingles , apagador.funcao, apagador.material, apagador.cor)

// OUTRA FORMA DE ACESSAR PROPRIEDADE
console.log("Oque: ",apagador["ingles"] )


var garrafa = {}
    garrafa.preco = 157
    garrafa.cor = "verde ciano"
    garrafa.tamanho = 2.5
    garrafa["validade"] = "1 ano"

    console.log(garrafa)
garrafa.preco = 171
garrafa["validade"] = "77 anos"
console.log(garrafa)

// CRIAR UMA NOVA PROPRIEDADE 
var novaPropriedade = "apelido"
garrafa[novaPropriedade] = "BRR BRR PATAPIM"
console.log(garrafa.apelido)


// CRIAR FUNÇÕES
var animal = {
    // PROPRIEDADE = VARIAVEIS
    nome : "chimpanzini bananini" , 
    especie : "brr brr patapim",
    raca : "labubu" , 
    // FUNÇÃO = METODO
    andar : function(){
        console.log("estou andando rs")  
    },

    latir : function(){
        console.log("estou latindo rs")
    
    }, 
}
console.log("o nome é: ", animal.nome)


animal.andar()
animal.latir()
