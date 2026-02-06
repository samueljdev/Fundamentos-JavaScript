// 1 - Strict
console.log(" ==== Strict ====");

"use strict";

// opa = "nao da certo";

const opa = "agora sim!";

// const undefined = 10;

// delete [].length;

// 2 - Console.log
console.log(" ==== Console.log ====");

let a = 1;
let b = 2;

if (a == 1) {
    a = b + 2;
}

console.log(a, b);

for (let i = 0; i < b; i++) {
    a = a + 2;
    console.log(a);
}

if (a > 5) {
    a = 25;
}

console.log(a);