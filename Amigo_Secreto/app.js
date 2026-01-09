//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
 
var lista = document.getElementById('listaAmigos');
var sorteio = document.getElementById('resultado');
var amigos = [];

function adicionarAmigo() {
    sorteio.innerHTML = '';

    let input = document.getElementById('amigo');
    let nome = input.value;

    if (nome == "") {
        alert("Por favor, insira um nome.");
        
    } else {
        amigos.push(nome);
        atualizaLista();
        input.value = "";  
    } 
}

function atualizaLista() {
    lista.innerHTML = '';
    for (let i = 0;i < amigos.length; i++) {
        let novaLi = document.createElement('li');
        novaLi.innerHTML = amigos[i];
        lista.appendChild(novaLi);
    } 
}

function sortearAmigo() {
    if (amigos.length !== 0) {
        lista.innerHTML = "";

        let escolha = document.createElement('li');
        let tamanho = amigos.length;
        let numeroA =  Math.floor(Math.random() * tamanho);
        let escolhido = amigos[numeroA];

        escolha.innerHTML = escolhido;
        sorteio.append("O amigo sorteado foi: ");
        sorteio.appendChild(escolha);
        amigos.length = 0;
    }
    
}