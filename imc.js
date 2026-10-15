let peso = document.getElementById('peso').value.replace(',', '.');
let altura = document.getElementById('altura').value.replace(',', '.');

function calcularIMC(peso, altura) {

    let imc = peso / (altura ** 2)
    const nivel = ["Abaixo do peso", "Peso normal", "Sobrepeso",
        "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"]

    if (imc < 18.5) {
        return "Abaixo do peso"
    }
    if (imc >= 18.5) {
        return "Peso normal"
    }
    if (imc >= 24.9) {
        return "Sobrepeso"
    }
    if (imc >= 29.9) {
        return "Obesidade grau 1"
    }
    if (imc >= 34.9) {
        return "Obesidade grau 2"
    }
    if (imc >= 39.9) {
        return "Obesidade grau 2"
    }
}