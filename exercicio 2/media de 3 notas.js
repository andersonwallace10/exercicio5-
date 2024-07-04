"use strict"
function calcularMedia() {
    // Obtendo as notas do usuário
    var nota1 = parseFloat(prompt("Digite a primeira nota:"));
    var nota2 = parseFloat(prompt("Digite a segunda nota:"));
    var nota3 = parseFloat(prompt("Digite a terceira nota:"));

    // Calculando a média
    var media = (nota1 + nota2 + nota3) / 3;

    // Verificando se foi aprovado ou reprovado
    if (media >= 60) {
        window.alert(`Média: ${media.toFixed(1)}. Aprovado!`);
    } else {
        window.alert(`Média: ${media.toFixed(1)}. Reprovado.`);
    }
}

// Chamando a função para calcular e exibir a média
calcularMedia();
