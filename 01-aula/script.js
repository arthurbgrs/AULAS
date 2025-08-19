
//comentario de uma linha


/*comentario de varias linhas
aqui eu posso escrever o que eu quiser
e o que eu quiser
e o que eu quiser
e o que eu quiser
e o que eu quiser
e o que eu quiser
e o que eu quiser
e o que eu quiser
e o que eu quiser
*/


//console.log = escreva do portugol
console.log("a trp ta na pista, solta o oruam!!!");

// alert("testar ne rs");

// Variaveis
var nome = "Arthur Fink";
console.log(nome);

//cadeia = string
var texto = "Pelé"
console.log(typeof(texto) )

// inteiro = number, int 
var numero = 157
console.log(typeof(numero) )

// real = float, number
var quebrado = 15.7
console.log(typeof(quebrado) )

// logico = boolean, bool 
var VouF = true
console.log(typeof(VouF) )

// Valor nulo
var nulo = null
console.log(typeof(nulo) )

// Variavel sem valor iniciado
var indefinido = undefined
console.log(typeof(indefinido) )

//operadores aritmeticos
// + - * / % 

var a = 10;
var b = 3;

var soma = a + b;
console.log("a soma é: " + soma)

var subtracao = a - b;
console.log("a subtração é: " + subtracao);

var multiplicacao = a * b;
console.log("a multplicação é: " + multiplicacao); 

var divisao = a / b;
console.log("a divisão é: " + divisao);

var resto = a % b;
console.log("o resto é: " + resto);

//operadores logicos
// e, ou, nao
//&&, ||, not

var verdade = true;
var mentira = false;

//comparação com E
console.log(verdade && mentira)
//comparação com OU
console.log(verdade || mentira)
//comparação com negação
console.log(verdade && !mentira)


//operadores relacionais
// > , < , >= , <= , == , != , === , !==
var v1 = 7
var v2 = 15
var v3 = "7"

console.log(v1 > v2);
console.log(v1 < v2);
console.log(v1 >= v2);
console.log(v1 <= v2);
console.log(v1 == v2);
console.log(v1 != v2);
console.log(v1 == v3); // compara so valor
console.log(v1 === v3); // compara valor e tipo
console.log(v1 !== v3); // compara valor e tipo



//interação com o usuario vi comando prompt
var numero = prompt("DIGITE UM NÚMERO: ")
var numero2 = prompt("DIGITE OUTRO NÚMERO: ")

var resultado = Number(numero) + Number(numero2)
console.log(resultado)

alert("O resultado é : " + resultado)
