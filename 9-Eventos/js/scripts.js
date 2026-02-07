// 1 - Adicionando eventos
console.log(" ==== Adicionando eventos ====");

const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
    console.log("Clicou aqui!");
});