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

// 6 - Eventos de tecla
console.log(" ==== Eventos de tecla ====");

document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla(keyup) ${e.key}`);
});

document.addEventListener("keydown", (e) => {
    console.log(`Pressionou a tecla(keydown) ${e.key}`);
});

// 7 - Outros eventos de mouse
console.log(" ==== Outros eventos de mouse ====");

const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou botão(mousedown)");
});

mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltou botão(mouseup)");
});

mouseEvents.addEventListener("dblclick", () => {
    console.log("Clique duplo(dblclick)");
});

// 8 - Movimento do mouse
console.log(" ==== Movimento do mouse ====");

document.addEventListener("mousemove", (e) => {
    // console.log(`No eixo X: ${e.x}`);
    // console.log(`No eixo Y: ${e.y}`);
});

// 9 - Evento no scroll
console.log(" ==== Evento no scroll ====");

window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 200) {
        console.log("Passamos 200px!");
    }
});

// 10 - Evento de focus
console.log(" ==== Evento de focus ====");

const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
    console.log("Entrou no input!");
});

input.addEventListener("blur", (e) => {
    console.log("Saiu do input!");
});