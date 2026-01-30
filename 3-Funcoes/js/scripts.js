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