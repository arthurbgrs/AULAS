var produto1 = {
  nome: "Coca cola",
  categoria: "bebida",
  tamanhos: ["200ml", "lata", "600ml", "2L"],
  quantidade: 7,
  descricao: function () {
    // O PRODUTO X É DA CATEGORIA X
    console.log("o produto", this.nome, "é da categoria", this.categoria);
  },
  verTamanhos: opcoes,
};

// console.log(produto1);

var produto2 = {
  nome: "Pistache",
  categoria: "comida",
  quantidade: 5,
  tamanhos: ["Pequeno", "Medio", "Grande"],
  descricao: function () {
    console.log(
      "gosto muito de ",
      this.nome,
      "é a minha",
      this.categoria,
      "favorita"
    );
  },
  verTamanhos: opcoes,
};

//,p
produto1.descricao();
produto2.descricao();

function opcoes() {
  let tmh = "arroz";
//   console.log("no inicio, ", tmh);

  for (index in this.tamanhos) {
    tmh += this.tamanhos[index] + ", ";
    // console.log(tmh);
    // console.log("no fim".tmh);
    
    
  }
  console.log("as opções de tamanho são:", tmh);
}
// produto1.verTamanhos();
produto2.verTamanhos();
