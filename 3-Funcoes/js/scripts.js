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