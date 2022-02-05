let vetor = [1,2,3];

const temDuplicadas = function(args){
    const valoresUnicos = new Set();
    args.forEach((v) => valoresUnicos.add(v));
    const valoresUnicosArray = Array.from(valoresUnicos);

    return valoresUnicosArray.length != args.length;
}


console.log(temDuplicadas(vetor))
