function calcularIMC(peso, altura) {
    let peso = document.getElementById('peso').value.replace(',', '.');
    let altura = document.getElementById('altura').value.replace(',', '.');

    const resultado = document.getElementById("resultado")

    let imc = peso / (altura ** 2)
    
    if (imc < 18.5) {
        resultado.innerHTML =  "Abaixo do peso"
    }
    if (imc >= 18.5) {
        resultado.innerHTML =  "Peso normal"
    }
    if (imc >= 24.9) {
        resultado.innerHTML =  "Sobrepeso"
    }
    if (imc >= 29.9) {
        resultado.innerHTML =  "Obesidade grau 1"
    }
    if (imc >= 34.9) {
        resultado.innerHTML =  "Obesidade grau 2"
    }
    if (imc >= 39.9) {
        resultado.innerHTML =  "Obesidade grau 2"
    }
}