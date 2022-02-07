let vetor = [1,2,3,4,5,1,2];

 /* Nesta função transformo o array em um Set, para remover as duplicadas e manter apenas valores unicos.
  A partir disso verifico se o tamanho do array é igual ao do set, 
  caso seja, significa que o vetor não tem valores duplicados,
  ao contrario, se os tamanhos forem diferentes, significa que existem duplicadas.
  a função retorna um valor booleano:
  true - caso exista duplicadas,
  false - caso não exista. 
   */
const temDuplicadas = function(args){
    const valoresUnicos = new Set();
    args.forEach((v) => valoresUnicos.add(v)); // é adicionado os valores do array dentro do set

    return valoresUnicos.size != args.length; // retorna um booleano
}


console.log(temDuplicadas(vetor))
