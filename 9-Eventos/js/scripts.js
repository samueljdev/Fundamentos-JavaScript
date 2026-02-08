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