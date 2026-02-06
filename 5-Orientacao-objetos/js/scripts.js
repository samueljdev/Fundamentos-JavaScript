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

// 3 - Prototype
console.log(" ==== Prototype ====");

const text = "asd";
console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const arr = [];
console.log(arr.length);

console.log(Object.getPrototypeOf(arr) === Array.prototype);

// 4 - Mais sobre prototype
console.log(" ==== Mais sobre prototype ====");

const myObject = {
    a: "b",
};

console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);
console.log(mySecondObject);
console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - Classes básicas
console.log(" ==== Classes básicas ====");

const cachorro = {
    raca: null,
};

const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao);

const bulldog = Object.create(cachorro);
bulldog.raca = "Bulldog";
console.log(bulldog);

// 6 - Funcoes como classes
console.log(" ==== Funcoes como classes ====");

function criarCachorro(nome, raca) {
    const cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.nome = nome;
    return cachorro;
}

const bob = criarCachorro("Bob", "Vira lata");
console.log(bob);

const jack = criarCachorro("Jack", "Poodle");
console.log(jack);
console.log(Object.getPrototypeOf(jack));