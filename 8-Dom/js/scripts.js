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

// 7 - AppendChild
console.log(" ==== AppendChild ====");

const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li); // visto apenas no elements do navegador

// 8 - ReplaceChild
console.log(" ==== ReplaceChild ====");

const h2 = document.createElement("h2");
h2.textContent = "Meu novo título!";

header.replaceChild(h2, title); // visto apenas no elements do navegador

// 9 - CreateTextNode
console.log(" ==== CreateTextNode ====");

const myText = document.createTextNode("Agora vamos colocar mais um título");

const h3 = document.createElement("h3");

h3.appendChild(myText);
mainContainer.appendChild(h3); // visto apenas no elements do navegador

// 10 - Trabalhando e mudando atributos
console.log(" ==== Trabalhando e mudando atributos ====");

const firstLink = navLinks.querySelector("a");
console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com/");
console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank");

// 11 - Altura e largura
console.log(" ==== Altura e largura ====");

const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// 12 - Posição do elemento
console.log(" ==== Posição do elemento ====");

const product1 = products[0];
console.log(product1.getBoundingClientRect());

// 13 - CSS com JS
console.log(" ==== CSS com JS ====");

mainContainer.style.color = "red"; //visto apenas na página do navegador
mainContainer.style.backgroundColor = "#333"; //visto apenas na página do navegador
mainContainer.style.paddingBottom = "15px"; // visto apenas na página do navegador

// 14 - Alterando estilos de varios elementos
console.log(" ==== Alterando estilos de varios elementos ====");

for (const li of listItens) {
    li.style.backgroundColor = "red";
}