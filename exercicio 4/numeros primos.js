"use script"
function calcularPotencia() {
    // Solicitando os números ao usuário
    var base = parseFloat(prompt("Digite o primeiro número (base):"));
    var expoente = parseFloat(prompt("Digite o segundo número (expoente):"));

    // Calculando a potência
    var resultado = Math.pow(base, expoente);

    // Exibindo o resultado usando alert
    alert(`O número ${base} elevado a ${expoente} é igual a ${resultado}`);
}

// Chamando a função para iniciar o cálculo da potência
calcularPotencia();
