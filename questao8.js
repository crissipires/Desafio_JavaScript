const mediaAritmeticaSimples = function(v1,v2,v3){
    return (v1+v2+v3)/3;
}


const mediaAritmeticaNvalores = function (...args){
    if(args.length > 0) { /* verifica se tem valores dentro do array.*/
        let total = 0;

        args.forEach((valor) => { /*somo todos valores dentro do array recebido pelo parametro da funcao.*/
            total += valor;
        })

        return total/args.length /* retorno a soma, dividida pela quantidade de itens dentro do array.*/
    }else {
        return 0;
    }

}

console.log(mediaAritmeticaSimples(2,2,2))
console.log(mediaAritmeticaNvalores())