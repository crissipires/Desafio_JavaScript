let a = 10
let b = 0

function trocarValores(x, y) {
  if (b != x && a != y) { /* altera a ordem se os valores passados pelo parametro é diferente dos contidos dentro das variaveis/ */
    b = x;
    a = y;
  } else { /* é alterado a ordem se os valores passados pelo parametro é igual dos contidos dentro das variaveis. */
    b = y;
    a = x;
  }
}

console.log(a);
console.log(b);

console.log("------------------");

trocarValores(a,b)

console.log(a)
console.log(b)