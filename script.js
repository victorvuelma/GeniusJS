let ordem = [];
let ordemClicada = [];

let pontos = 0;

// 0 - VERDE
// 1 - VERMELHO
// 2 - AMARELO
// 3 - AZUL

// SELECIONANDO OS ELEMENTOS HTML A PARTIR DA CLASSE
let azul = document.querySelector("#azul");
let vermelho = document.querySelector("#vermelho");
let verde = document.querySelector("#verde");
let amarelo = document.querySelector("#amarelo");

let gerarOrdem = () => {
    // GERAR NUMERO DE 0 A 3
    let proximo = Math.floor(Math.random() * 4);
    
    // ATRIBUI O NUMERO AO PROXIMO DA ORDEM 
    ordem[ordem.length] = proximo;
    ordemClicada = [];
    
    // ACENDE A ORDEM GERADA
    for (let i in ordem) {
        let elementoDiv = elemento(ordem[i]);
        acender(elementoDiv, Number(i) + 1);
    }
}

//ACENDE O ELEMENTO EM SEQUENCIA
let acender = (elementoDiv, tempo) => {
    tempo = tempo * 500;
    setTimeout(() => {
        elementoDiv.classList.add('selecionado');
    }, tempo - 250);
    setTimeout(() => {
        elementoDiv.classList.remove('selecionado');
    }, tempo);
}

//
let compararOrdem = () => {
    for (let i in ordemClicada) {
        if (ordemClicada[i] != ordem[i]) {
            perdeu();
            break;
        }
    }
    if (ordemClicada.length == ordem.length) {
        alert(`Pontuação: ${pontos}!\nVocê acertou! Iniciando próximo nível!`);
        proximo();
    }
}

// CHAMADO QUANDO O USUARIO CLICA EM UMA DAS DIVS
let clicou = (cor) => {
    ordemClicada[ordemClicada.length] = cor;
    elemento(cor).classList.add("selecionado");
    
    setTimeout(() => {
        elemento(cor).classList.remove("selecionado");
        
        compararOrdem();
    }, 250);
}

let elemento = (cor) => {
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

let proximo = () => {
    pontos++;
    
    gerarOrdem();
}

let perdeu = () => {
    alert(`Pontuação: ${pontos}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.`);
    
    ordem = [];
    ordemClicada = [];
    
    iniciar();
}

let iniciar = () => {
    alert("Iniciando novo jogo!");
    
    pontos = 0;
    
    proximo();
}

verde.onclick = () => clicou(0)
vermelho.onclick = () => clicou(1)
amarelo.onclick = () => clicou(2)
azul.onclick = () => clicou(3)

iniciar();