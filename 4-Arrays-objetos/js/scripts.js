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