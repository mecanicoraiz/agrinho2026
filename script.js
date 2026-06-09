// Função para calcular a economia estimada de água
function calcularEconomia() {
    // Captura o valor inserido pelo aluno/usuário
    const areaInput = document.getElementById('area');
    const area = parseFloat(areaInput.value);

    // Validação simples para garantir que o número é válido
    if (isNaN(area) || area <= 0) {
        alert("Por favor, insira um número válido de hectares.");
        return;
    }

    // Base de cálculo fictícia/educativa: 
    // Gotejamento economiza em média 30.000 litros de água por hectare/mês em relação à aspersão comum.
    const economiaPorHectare = 30000; 
    const economiaTotal = area * economiaPorHectare;

    // Elementos do HTML onde o resultado será exibido
    const resultadoDiv = document.getElementById('resultado');
    const textoResultado = document.getElementById('texto-resultado');

    // Atualiza o texto com a resposta formatada
    textoResultado.innerHTML = `Ao adotar o sistema de gotejamento em uma área de <strong>${area} hectare(s)</strong>, estima-se uma economia de aproximadamente <strong>${economiaTotal.toLocaleString('pt-BR')} litros</strong> de água por mês!<br><br>Isso reduz o impacto nos mananciais próximos à sua comunidade e garante a sustentabilidade do solo.`;

    // Remove a classe 'hidden' para tornar o resultado visível na tela
    resultadoDiv.classList.remove('hidden');
}
