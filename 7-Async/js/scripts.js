// 1 - SetTimeout
console.log(" ==== SetTimeout ====");

console.log("Ainda não executou");

setTimeout(function () {
    console.log("Requisição assíncrona!");
}, 2000);

console.log("Ainda não executou 2");

// 2 - SetInterval
console.log(" ==== SetInterval ====");

console.log("Ainda não começou");

// setInterval(function () {
//     console.log("Intervalo assíncrono");
// }, 3000);

console.log("Ainda não começou 2");

// 3 - Promise
console.log(" ==== Promise ====");

const promessa = Promise.resolve(5 + 5);

console.log("Algum código!");

promessa
    .then((value) => {
        console.log(`A soma é ${value}`);
        return value;
    })
    .then((value) => value - 1)
    .then((value) => console.log(`Agora é: ${value}`));

// 4 - Falha na promise
console.log(" ==== Falha na promise ====");

Promise.resolve(4 * "asd")
    .then((n) => {
        if (Number.isNaN(n)) {
            throw new Error("Valores inválidos!");
        }
    })
    .catch((err) => console.log(`Um erro ocorreu: ${err}`));