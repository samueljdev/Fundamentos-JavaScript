// 1 - Arrays
console.log(" ==== Arrays ====");

const lista = [1, 2, 3, 4, 5];
console.log(lista);
console.log(typeof lista);

const itens = ["Matheus", true, 2, 4.12];
console.log(itens);

// 2 - Mais sobre arrays
console.log(" ==== Mais sobre arrays ====");

const arr = ["a", "b", "c", "d"];
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[10]);

// 3 - Propriedades
console.log(" ==== Propriedades ====");

const numbers = [5, 12, 4, 22];
console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Matheus";
console.log(myName.length);

// 4 - Métodos
console.log(" ==== Métodos ====");

const otherNumbers = [1, 2, 3];
const allNumbers = numbers.concat(otherNumbers);
console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);
console.log(text.indexOf("g"));

// 5 - Objetos
console.log(" ==== Objetos ====");

const person = {
    name: "Matheus",
    age: 31,
    job: "Programador",
};

console.log(person.name);
console.log(person.name.length);
console.log(typeof person);

// 6 - Criando e deletando propriedades
console.log(" ==== Criando e deletando propriedades ====");

const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};

console.log(car);

car.doors = 4;
console.log(car);

delete car.km;
console.log(car);

// 7 - Mais sobre objetos
console.log(" ==== Mais sobre objetos ====");

const obj = {
    a: "teste",
    b: true,
};

console.log(obj instanceof Object);

const obj2 = {
    c: [],
};

Object.assign(obj2, obj);
console.log(obj2);

// 8 - Conhecendo melhor os objetos
console.log(" ==== Conhecendo melhor os objetos ====");

console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(person));
console.log(Object.entries(obj));

// 9 - Mutação
console.log(" ==== Mutação ====");

const a = {
    name: "Matheus",
};

const b = a;
console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;
console.log(a);
console.log(b);

delete b.age;
console.log(a);
console.log(b);

// 10 - Loop em array
console.log(" ==== Loop em array ====");

const users = ["Matheus", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
    console.log(`Listando usuário: ${users[i]}`);
}

// 11 - Push e pop
console.log(" ==== Push e pop ====");

const array = ["a", "b", "c"];

array.push("d");
console.log(array);
console.log(array.length);

array.pop();
const itemRemovido = array.pop();

console.log(itemRemovido);
console.log(array);
console.log(array.length);

array.push("Dá", "Para", "Inserir", "Vários");
console.log(array);

// 12 - Shift e unshift
console.log(" ==== Shift e unshift ====");

const letters = ["a", "b", "c"];

const letter = letters.shift();
console.log(letter);

console.log(letters);

letters.unshift("z", "x", "y");

letters.unshift("p");
console.log(letters);

// 13 - Indexof e lastindexof
console.log(" ==== Indexof e lastindexof ====");

const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.lastIndexOf("Maçã"));

console.log(myElements.indexOf("Mamão"));
console.log(myElements.lastIndexOf("Mamão"));

// 14 - Slice
console.log(" ==== Slice ====");

const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);
console.log(subArray);

const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);
console.log(subArray3);
// 2 em diante
const subArray4 = testeSlice.slice(2);
console.log(subArray4);

// 15 - Foreach
console.log(" ==== Foreach ====");

const nums = [1, 2, 3, 4, 5];

nums.forEach((n) => {
    console.log(`O número atual é: ${n}`);
});

const posts =
    [
        { title: "Primeiro post", category: "C#" },
        { title: "Segundo post", category: "JavaScript" },
        { title: "Terceiro post", category: "Python" },
        { title: "Quarto post", category: "Java" },
    ];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// 16 - Includes
console.log(" ==== Includes ====");

const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));
console.log(brands.includes("Kia"));

if (brands.includes("BMW")) {
    console.log("Há carros da marca BMW!");
}

// 17 - Reverse
console.log(" ==== Reverse ====");

const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();
console.log(reverseTest);

// 18 - Trim
console.log(" ==== Trim ====");

const trimTest = "  testando \n   ";

console.log(trimTest.trim());
console.log(trimTest);

console.log(trimTest.trim().length);
console.log(trimTest.length);