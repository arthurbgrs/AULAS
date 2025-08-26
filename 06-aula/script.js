var aluno = {
    nome : "Kleber", 
    anoEscolar : "2°",
    turma : "C",
    notas : [6, 8 , 7],
    estudar : function(){
        console.log("Estou estudando")
    },
    // METODO COM FUNÇÃO INTERNA
    media: function(n1, n2, n3){
        return((n1 + n2 + n3) / 3)
    }, 
    // METODO COM FUNÇÃO EXTERNA
    ocorrencias : listaDeOcorrencias
}
// ACESSA AS PROPRIEDADES DO OBJETO ALUNO
console.log("O aluno", aluno.nome, "esta no", aluno.anoEscolar, "ano escolar. ");

// EXECUTA UM METODO DENTRO DO OBJETO
aluno.estudar()
console.log("Media final:", aluno.media(aluno.notas[0], aluno.notas[1], aluno.notas[2]));

// CRIAR FUNÇÃO EXTERNA PARA UTILIZAÇÃO DO OBJETO
function listaDeOcorrencias(){
    console.log("Comeu ba biblioteca");
    console.log("Xingou no corredor da sala");
    console.log("Não fez o trabalho");
    
    
    
}