let ordem = [];
let ordemClicada = [];

let pontos = 0;

// 0 - VERDE
// 1 - VERMELHO
// 2 - AMARELO
// 3 - AZUL

// SELECIONANDO OS ELEMENTOS HTML A PARTIR DA CLASSE
const azul = document.querySelector("#azul");
const vermelho = document.querySelector("#vermelho");
const verde = document.querySelector("#verde");
const amarelo = document.querySelector("#amarelo");
const pontosDiv = document.querySelector("#pontos");

const gerarOrdem = () => {
    // GERAR NUMERO DE 0 A 3
    const proximo = Math.floor(Math.random() * 4);

    // ATRIBUI O NUMERO AO PROXIMO DA ORDEM 
    ordem[ordem.length] = proximo;
    ordemClicada = [];

    // ACENDE A ORDEM GERADA
    for (const i in ordem) {
        acender(elemento(ordem[i]), Number(i) + 1);
    }
}

//ACENDE O ELEMENTO EM SEQUENCIA
const acender = (elementoDiv, tempo) => {
    tempo = tempo * 500;
    setTimeout(() => {
        elementoDiv.classList.add('selecionado');
    }, tempo - 250);
    setTimeout(() => {
        elementoDiv.classList.remove('selecionado');
    }, tempo);
}

//
const compararOrdem = () => {
    for (const i in ordemClicada) {
        if (ordemClicada[i] != ordem[i]) {
            perdeu();
            break;
        }
    }
    if (ordemClicada.length === ordem.length) {
        pontos++;

        alert(`Pontuação: ${pontos}!\nVocê acertou! Iniciando próximo nível!`);
        proximo();
    }
}

// CHAMADO QUANDO O USUARIO CLICA EM UMA DAS DIVS
const clicou = (cor) => {
    ordemClicada[ordemClicada.length] = cor;
    elemento(cor).classList.add("selecionado");

    setTimeout(() => {
        elemento(cor).classList.remove("selecionado");

        compararOrdem();
    }, 250);
}

const elemento = (cor) => {
    if (cor == 0) {
        return verde;
    } else if (cor == 1) {
        return vermelho;
    } else if (cor == 2) {
        return amarelo;
    } else if (cor == 3) {
        return azul;
    }
}

const proximo = () => {
    renderPontos();

    gerarOrdem();
}

const perdeu = () => {
    alert(`Pontuação: ${pontos}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.`);

    ordem = [];
    ordemClicada = [];

    iniciar();
}

const iniciar = () => {
    alert("Iniciando novo jogo!");

    pontos = 0;
    renderPontos();

    proximo();
}

const renderPontos = () => {
    pontosDiv.innerHTML = pontos;
}

verde.onclick = () => clicou(0)
vermelho.onclick = () => clicou(1)
amarelo.onclick = () => clicou(2)
azul.onclick = () => clicou(3)

iniciar();