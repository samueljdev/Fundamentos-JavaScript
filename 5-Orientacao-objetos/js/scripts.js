// 1 - Métodos
console.log(" ==== Métodos ====");

const animal = {
    nome: "Bob",
    latir: function () {
        console.log("Au au");
    },
};

animal.latir();

// 2 - Aprofundando em métodos
console.log(" ==== Aprofundando em métodos ====");

const pessoa = {
    nome: "Henrique",

    getNome: function () {
        return this.nome;
    },

    setNome: function (novoNome) {
        this.nome = novoNome;
    },
};

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Henrique Battisti");
console.log(pessoa.getNome());