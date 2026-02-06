// 1 -Movendo-se no DOM
console.log(" ==== Movendo-se no DOM ====");

console.log("Movendo-se no DOM == ");

console.log(document.body);

console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].textContent);
console.log(document.body.childNodes[1].textContent.length);

// 2 - Selecionando por tag
console.log(" ==== Selecionando por tag ====");

const listItens = document.getElementsByTagName("li");
console.log(listItens);

// 3 - Selecionando elemento por id
console.log(" ==== Selecionando elemento por id ====");

const title = document.getElementById("title");
console.log(title);

// 4 - Selecionando elementos por classe
console.log(" ==== Selecionando elementos por classe ====");

const products = document.getElementsByClassName("product");
console.log(products);

// 5 - Selecionando os elementos por CSS
console.log(" ==== Selecionando os elementos por CSS ====");

const productsQuery = document.querySelectorAll(".product");
console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

// 6 - InsertBefore
console.log(" ==== InsertBefore ====");

const p = document.createElement("p");
const header = title.parentElement;
console.log(header);

header.insertBefore(p, title); // visto apenas no elements do navegador