/* 
Para a resolução dessa questão foi utilizado um Map.
a chave corresponde a nota, e o valor será a quantidade de notas entregues
*/
const notas = new Map();

// Notas adicionadas do maior para o menor. para que ele use o menor numero de notas possiveis
notas.set(100, 0);
notas.set(50, 0);
notas.set(20, 0);
notas.set(10, 0);

/*
A função saque faz um interação entre chaves das notas 
e faz o saque com as notas disponiveis enquanto o valor for maior que a nota 
e vai adicionando mais 1 nas notas usadas no saque.
*/
const saque = function(valor){
  const v = valor

  for (const key of notas.keys()) {
    while (valor  >= key) { // condição do loop para que enquanto o valor do saque for maior que a nota disponivel, ele subtraia. Para assim, usar o menor numero de notas, tendo em vista que está em ordem decrescente.
      valor -= key; // Subtrai o valor do saque com a nota utilizada
      notas.set(key, notas.get(key) + 1); // Faz um get da quantidade e adicona mais 1.
    }
  }

  informarResultado(v);
}

/*
Esta função informar o valor que o usuario sacou, 
e interar o map notas, mostrando na tela apenas as notas usadas no saque e as suas respectivas quantidades.
*/
const informarResultado = function (valor) {
  console.log("Valor do saque R$" + valor)
  console.log("Entregar: ")

  notas.forEach(function (value, key) {
    if (value != 0) {
      console.log(value + " nota(s) de R$" + key);
    }
  });
};


saque(80);

