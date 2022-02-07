/* A função calcula o imc do usuario a partir da divisão do peso com a altura,
 elevado ao quadrado.retorna um valor com 2 casas decimais.*/
const calcularImc = function(peso,altura){
    return (peso / Math.pow(altura, 2)).toFixed(2); 
} 

/* A função retorna o resultado a partir do valor do imc, seguindo as condições.*/
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