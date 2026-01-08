//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
 
var lista = document.getElementById('listaAmigos');
var sorteio = document.getElementById('resultado');
var amigos = [];

function adicionarAmigo() {
    sorteio.innerHTML = '';

    let input = document.getElementById('amigo');
    let nome = input.value;

    if (nome == "") {
        alert("Adicione um nome válido");
        
    } else {
        let novaLi = document.createElement('li');

        novaLi.innerHTML = nome;
        lista.appendChild(novaLi);
        amigos.push(nome);

        input.value = null;
        
    }
    
}

function sortearAmigo() {
    lista.innerHTML = "";

    let escolha = document.createElement('li');
    let tamanho = amigos.length;
    let numeroA =  Math.floor(Math.random() * tamanho);
    let escolhido = amigos[numeroA]
    escolha.innerHTML = escolhido;
    sorteio.appendChild(escolha);
    amigos.length = 0;
}