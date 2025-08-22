// ARRAYS PARA GUARDAR AS INFORMAÇÕES
var alunos = []
var notasA = []
var notasB = []

// GUARDA AS INFORMAÇÕES VIMDAS DO USUARIO
function cadastro(){
    for(var i = 0; i < 3; i++){
        alunos[i] = prompt("Digite o nome do aluno: ")
        notasA[i] = Number(prompt("Digite a primeira nota: "))
        notasB[i] = Number(prompt("Digite a segunda nota: "))
    }
}

// CALCULAR MEDIA
function media(nota1, nota2){
    let mediaCalculada = ((nota1 * 0.4) + (nota2 * 0.6))
    return mediaCalculada
}

// APROVADO >= 7, REC < 7 E >= 5, REPROVADO < 5 
function situacao(mediaFinal){
    if(mediaFinal >= 7){
      return "APROVADO"
    }
    else if(mediaFinal < 7 && mediaFinal >= 5){
       return "RECUPERAÇÃO"
    }
    else{
       return "REPROVADO"
    }
}


// FUNÇÃO DOS RESULTADOS

function mostraResultados(){
    for(var index in  alunos){
        let notaPri = notasA[index] // PEGA A PRIMEIRA NOTA  E GUARDA, VINDA DO ARRAY notasA
        let notaSeg = notasB[index] // PEGA A PRIMEIRA NOTA  E GUARDA, VINDA DO ARRAY notasB
        let mediaAtual = media(notaPri, notaSeg) // MANDA AS NOTAS PARA A FUNÇÃO DE MEDIA
        let status = situacao(mediaAtual) // DESCOBRE A SITUAÇÃO DE ACORDO COM A MEDIA
        console.log("o aluno: ", alunos[index], " teve media de : ", mediaAtual)
        console.log("O status dele é de: ", status)
    }
}
cadastro()
mostraResultados()
