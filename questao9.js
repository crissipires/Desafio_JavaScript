let a = 10
let b = 0

function trocarValores(x, y) {
  if (b != x && a != y) {
    b = x;
    a = y;
  } else {
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