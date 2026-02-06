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