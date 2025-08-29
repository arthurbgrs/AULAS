function quemMeChamou(individuo) {
  console.log(individuo);
  console.log("class: ", individuo.class);
  console.log("id: ", individuo.id);
  console.log("Name: ", individuo.name)
  console.log("Valor:", individuo.value );
  
}

// ELEMENTOQUECHAMOU = PARTE DO HTML QUE INVOCOU A FUNÇÃO
function trocatexto(elementoQueChamou){
    // MOSTRA O TEXTO DO HTML QUE CHAMOU A FUNÇÃO
    // console.log(elementoQueChamou);

    // CRIA UMA VARIAVEL PRA GUARDAR QUEM ELE ACHAR COM AQUELE ID
    let textoAntigo = document.getElementById("textoPraTrocar")

    // USA O INNERTEXT PRA SUBSTITUIR O QUE TAVA DENTRO DO TEXTOANTIGO, PRO VALOR QU ESTA NA CAIXINHA DO ELEMENTO QUE CHAMOU A FUNÇÃO
    textoAntigo.innerHTML = elementoQueChamou.value
}
function troca(elementoQueChamou){
let antigo = document.getElementById("textoOutro")
antigo.innerHTML = elementoQueChamou.value
}


function corVermelho(elemento){
    elemento.style.color = "red"
    elemento.style.fontSize = "60px"
}
function corAzul(elemento){
    elemento.style.color = "blue"
    elemento.style.fontSize = "20px"
}