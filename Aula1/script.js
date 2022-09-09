// Imersão Dev Alura
// Calculadora de Notas
// @sammid37

function calcular(){
    var nota1, nota2, nota3;
    
    nota1 = parseFloat(document.getElementById('n1').value);
    nota2 = parseFloat(document.getElementById('n2').value);
    nota3 = parseFloat(document.getElementById('n3').value);
    
    var notaFinal = (nota1+nota2+nota3)/3
    
    document.getElementById("notafinal").innerHTML = "Sua nota final é: " + notaFinal.toFixed(2);
    console.log(notaFinal)

    // verifica se o aluno foi ou não aprovado
    if (notaFinal >= 7.0) {
        document.getElementById("situacao").innerHTML = "Aprovado!";
    } else if (notaFinal >= 4.0 && notaFinal < 7.0) {
        document.getElementById("situacao").innerHTML = "Recuperação";
    } else {
        document.getElementById("situacao").innerHTML = "Reprovado";
    }
    // limpar após imprimir o resultado
    // document.getElementById("n1").value = "";
    // document.getElementById("n2").value = "";
    // document.getElementById("n3").value = "";
}


