// 1 - Adicionando eventos
console.log(" ==== Adicionando eventos ====");

const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
    console.log("Clicou aqui!");
});

// 2 - Removendo evento
console.log(" ==== Removendo eventos ====");

const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
});

// 3 - Argumento de evento
console.log(" ==== Argumento do evento ====");

const title = document.querySelector("#my-title");

title.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.offsetX); // posição do elemento
    console.log(e.pointerType);
});

// 4 - Propagação de evento
console.log(" ==== Propagação de evento ====");

const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
    // sem isso acontece a propagação
    e.stopPropagation();
    console.log("Evento 2");
});

// 5 - Removendo efeito padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("redirecionamento impedido");
});