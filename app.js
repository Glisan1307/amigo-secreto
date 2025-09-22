//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// app.js - lógica do Amigo Secreto
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let amigos = [];
function adicionarAmigo() {
    const nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    inputAmigo.value = "";
}
function atualizarLista() {
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome para sortear!");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>🎉 O amigo secreto sorteado foi: <strong>${amigoSorteado}</strong></li>`;
}
