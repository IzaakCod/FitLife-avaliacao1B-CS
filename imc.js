function calcularIMC() {
    const pesoTexto = document.getElementById("peso").value.trim().replace(",", ".");
    const alturaTexto = document.getElementById("altura").value.trim().replace(",", ".");
    const resultado = document.getElementById("resultado");
    const peso = Number(pesoTexto);
    const altura = Number(alturaTexto);

    if (!Number.isFinite(peso) || !Number.isFinite(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = "Informe peso e altura v\u00e1lidos e maiores que zero.";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao;

    if (imc < 18.5) {
        classificacao = "abaixo do peso";
    } else if (imc < 25) {
        classificacao = "peso normal";
    } else if (imc < 30) {
        classificacao = "sobrepeso";
    } else if (imc < 35) {
        classificacao = "obesidade grau I";
    } else if (imc < 40) {
        classificacao = "obesidade grau II";
    } else {
        classificacao = "obesidade grau III";
    }

    resultado.textContent = "Seu IMC \u00e9 " + imc.toFixed(2) + ": " + classificacao + ".";
}

const formularioCadastro = document.getElementById("formCadastro");

formularioCadastro.addEventListener("submit", (evento) => {
    evento.preventDefault();
    document.getElementById("mensagemCadastro").textContent =
        "Formul\u00e1rio validado, mas os dados ainda n\u00e3o foram enviados nem armazenados.";
});
