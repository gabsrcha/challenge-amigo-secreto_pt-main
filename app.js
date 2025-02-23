//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeAmigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;
    if (nomeAmigo.trim() === "") {
        alert("Por favor, insira um nome.");
    } else {
        nomeAmigos.push(nomeAmigo);
        console.log(nomeAmigos);
        document.querySelector('input').value = "";
        atualizarListaAmigos(); // Atualiza a lista de amigos na tela
    }
}

function atualizarListaAmigos() {
    let lista = document.querySelector('#listaAmigos'); 
    lista.innerHTML = ""; 

    for (let amigo of nomeAmigos) {
        let li = document.createElement('li'); 
        li.textContent = amigo; 
        lista.appendChild(li); 
    }
}

function sortearAmigo() {
    if (nomeAmigos.length === 0) {
        alert("Nenhum amigo disponível para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nomeAmigos.length);
    let amigoSorteado = nomeAmigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}

document.addEventListener('DOMContentLoaded', atualizarListaAmigos);