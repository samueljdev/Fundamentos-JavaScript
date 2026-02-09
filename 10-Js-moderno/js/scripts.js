// 1 Var, let e const
console.log(" ==== Var, let e const ====");

var x = 10; // escopo global
var y = 15;

if (y > 10) {
    var x = 5; // var faz atribuição em escopo local, e tbm modifica o escopo global
    console.log(x);
}

console.log(x); // escopo global modificado pela variavel local no if

let a = 10; // escopo global
let b = 15;

if (b > 10) {
    let a = 5; // let atribiu somente no escopo local
    console.log(a);
}

console.log(a); // let mantem o valor da variavel d escopo global

function logName() {
    const nome = "Pedro";
    console.log(nome);
}

const nome = "Matheus";

logName();

console.log(nome);