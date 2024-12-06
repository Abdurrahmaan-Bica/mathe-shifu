// Importa Algebrite
import Algebrite from "https://cdn.jsdelivr.net/npm/algebrite@1.5.0/algebrite.min.js";

$(document).ready(function () {
    // Manipular clique dos botões
    $(".pixel-button").on("click", function () {
        // Obter o texto do botão clicado (função matemática)
        const equation = $(this).text().replace("f(x) = ", "").trim();

        // Determinar operação escolhida (derivada ou integral)
        const operation = $("#operation").val();

        // Variável da função (aqui usamos sempre "x")
        const variable = "x";

        // Inicializar resultado
        let result;

        // Calcular com base na operação
        if (operation === "derivative") {
            result = calculateDerivative(equation, variable);
        } else if (operation === "integral") {
            result = calculateIntegral(equation, variable);
        }

        // Atualizar o texto na página com o resultado
        $("#result").text(`Result: ${result}`);
    });

    // Função para calcular derivadas
    function calculateDerivative(equation, variable) {
        try {
            return Algebrite.run(`d(${equation}, ${variable})`);
        } catch (error) {
            return "Error calculating derivative!";
        }
    }

    // Função para calcular integrais
    function calculateIntegral(equation, variable) {
        try {
            return Algebrite.run(`integral(${equation}, ${variable})`);
        } catch (error) {
            return "Error calculating integral!";
        }
    }
});
