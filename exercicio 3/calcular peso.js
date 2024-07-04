"use script"
function calcularPesosGados() {
    var pesos = [];
    var peso;

    // Leitura dos pesos dos gados
    do {
        peso = parseFloat(prompt("Digite o peso do gado (Digite 0 para parar):"));
        if (peso !== 0) {
            pesos.push(peso);
        }
    } while (peso !== 0);

    // Verifica se foram inseridos pesos
    if (pesos.length === 0) {
        alert("Nenhum peso foi informado.");
        return;
    }

    // Calcula o peso do maior gado
    var pesoMaximo = Math.max(...pesos);

    // Calcula o peso do menor gado
    var pesoMinimo = Math.min(...pesos);

    // Calcula a média dos pesos dos gados
    var somaPesos = pesos.reduce((total, peso) => total + peso, 0);
    var media = somaPesos / pesos.length;

    // Exibe os resultados usando alert
    alert(`Peso do menor gado: ${pesoMinimo.toFixed(2)}\nPeso do maior gado: ${pesoMaximo.toFixed(2)}\nMédia do peso dos gados: ${media.toFixed(2)}`);
}

// Chamando a função para iniciar o cálculo dos pesos dos gados
calcularPesosGados();
