const mediaAritmeticaSimples = function(v1,v2,v3){
    return (v1+v2+v3)/3;
}


const mediaAritmeticaNvalores = function (...args){
    if(args.length > 0) {
        let total = 0;

        args.forEach((valor) => {
            total += valor;
        })

        return total/args.length
    }else {
        return 0;
    }

}

console.log(mediaAritmeticaSimples(2,2,2))
console.log(mediaAritmeticaNvalores())