const calcularImc = function(peso,altura){
    return (peso / Math.pow(altura, 2)).toFixed(2);
}

const classificacaoImc = function(peso,altura){
    let imc = calcularImc(peso,altura);

    if(imc < 18) {
        return "Abaixo do peso";
    }else if(imc < 25) {
        return "Peso Normal"
    }else { 
        return "Acima do peso"
    }
}

console.log(classificacaoImc(80,2.00))