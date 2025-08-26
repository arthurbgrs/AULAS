// OBJETO WINDOW = JANELA DO NAVEGADOR

// console.log(window.alert("oi"));
// window.prompt("fala seu vulgo")

// OBJETO DOCUMENT = CODIGO DO HTML

console.log(document);
console.log(document.head);
console.log(document.body);

// ACESSANDO ELEMENTOS DO HTML
// POR TAGS, CLASS , E ID

// BUSCA ELEMENTOS PELA MESMA TAG
var titulos = document.getElementsByTagName("h1");

console.log(titulos);

// BUSCA ELEMENTO PELA MESMA CLASS
var paragrafos = document.getElementsByClassName("para");

console.log(paragrafos);

// BUSCA ELEMENTOS PELO MESMO ID
var achado = document.getElementById("p3");

console.log(achado);

// MODIFICANDO ELEMENTO DA LISTA DE ACHADOS PELA TAG
titulos[1].style.color = "green";
titulos[2].style.backgroundColor = "pink";

// MODIFICANDO ELEMENTO DA LISTA DE ACHADOS PELA CLASS
paragrafos[0].style.fontSize = "45px"
paragrafos[0].style.fontWeight = "bold"

// MODIFICANDO ELEMENTO DA LISTA ACHADOS PELA ID
// TROCANDO O TEXTO DO ELEMENTO
achado.innerText = "tatu"

// TROCANO O HTML DO ELEMENTO
achado.innerHTML = "<h2> Novo texto </h2>"

//  CRIAR UMA FUNÇÃO PARA SER ATIVADA
function cliquei(){
    console.log("parabens, ganhou um bezerro");
}