// 1 - Criando uma função
console.log(" ==== Criando uma função! ====");

function minhaFuncao() {
    console.log("Testando!");
};
minhaFuncao();

const minhaFuncaoEmVariável = function () {
    console.log("Função em variável!");
};
minhaFuncaoEmVariável();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
};
funcaoComParametro("Opa");

// 2 - Return
console.log(" ==== Return ====");

const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, b);
console.log(resultado);

console.log(soma(c, d));

// 3 - Escopo da função
console.log(" ==== Escopo da função ====");

let y = 10;
function testandoEscopo() {
    let y = 20;
    console.log(`Y dentro da função: ${y}`);
}
console.log(`Y fora da função: ${y}`);

testandoEscopo();

// 4 - Escopo aninhado
console.log(" ==== Escopo aninhado ====");

let m = 10;
function escopoAninhado() {

    let m = 20;

    if (true) {
        let m = 30;
        console.log(m);
    }

    console.log(m);
}

escopoAninhado();

console.log(m);

// 5 - Arrow function
console.log(" ==== Arrow function ====");

const testeArrow = () => {
    console.log("Esta é uma arrow function");
};

testeArrow();

const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log("Par");
        return;
    }
    console.log("Impar");
};

parOuImpar(5);
parOuImpar(6);

// 6 - Mais sobre arrow functions
console.log(" ==== Mais sobre arrow functions ====");

const raizQuadrada = (x) => {
    return x * x;
};

const raizQuadrada2 = (n) => n * n;

console.log(raizQuadrada(4));
console.log(raizQuadrada2(4));

const helloWorld = () => console.log("Hello!");

helloWorld();

// 7 - Parametro opcional
console.log(" ==== Parametro opcional ====");

const multiplication = function (n, m) {
    if (m === undefined) {
        return n * 2;
    } else {
        return m * n;
    }
};

console.log(multiplication(4, 4));
console.log(multiplication(4));

const greeting = (name) => {
    if (!name) {
        console.log("Olá!");
        return;
    }
    console.log(`Olá ${name}!`);
};

greeting();
greeting("Marcos");

// 8 - Valor default
console.log(" ==== Valor default ====");

const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`;
};

console.log(customGreeting("Maria"));
console.log(customGreeting("João", "Bom dia"));

const repeatText = (text, repeat = 3) => {
    for (let i = 0; i < repeat; i++) {
        console.log(text);
    }
};

repeatText("Testando");
repeatText("Agora repete 5 vezes", 5);

// 9 - Closure
console.log(" ==== Closure ====");

function someFunction() {
    let txt = "Alguma coisa";

    function display() {
        console.log(txt);
    }
    display();
}

someFunction();