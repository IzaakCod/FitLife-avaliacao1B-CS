function calcularIMC() {

    let peso = document.getElementById('peso').value.replace(',', '.');
    let altura = document.getElementById('altura').value.replace(',', '.');

    const resultado = document.getElementById("resultado")

    let imc = peso / (altura ** 2)
    
    if (imc < 18.5) {
        resultado.innerHTML =  `O seu IMC é ${imc.toFixed(2)} e você está Abaixo do peso.`
    }
    if (imc >= 18.5) {
        resultado.innerHTML =  `O seu IMC é ${imc.toFixed(2)} e você está com Peso normal.`
    }
    if (imc >= 24.9) {
        resultado.innerHTML =  `O seu IMC é ${imc.toFixed(2)} e você está com Sobrepeso.`
    }
    if (imc >= 29.9) {
        resultado.innerHTML =  `O seu IMC é ${imc.toFixed(2)} e você está com Obesidade grau 1.`
    }
    if (imc >= 34.9) {
        resultado.innerHTML =  `O seu IMC é ${imc.toFixed(2)} e você está com Obesidade grau 2.`
    }
    if (imc >= 39.9) {
        resultado.innerHTML =  ` O seu IMC é ${imc.toFixed(2)} e você está com Obesidade grau 2.`
    }
}