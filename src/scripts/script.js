// Adiciona Evento ao Botão Iniciar com uma função assincrona
iniciarBtn.addEventListener('click', async () => {
    iniciarBtn.disabled = true; // Desabilita o Botão
    await iniciarSemaforo(); // Inicia o Semaforo
    iniciarBtn.disabled = false; // Habilita o Botão
});

function aguardar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); // Retorna uma promise no tempo especificado
}

// Função Assincrona para inicar o semáforo
async function iniciarSemaforo() {
    iniciarBtn.style.display = 'none'; // Esconde o Botão
    await mudarCor('src/img/vermelho.png', 5000); // Inicia com o Semáforo Vermelho
    await mudarCor('src/img/amarelo.png', 3000); // Muda o semáforo para Amarelo
    await mudarCor('src/img/verde.png', 5000); // Muda o Semáforo para Verde
    await mudarCor('src/img/desligado.png', 100); // Desliga o Semáforo
    await botaoDisplay('block', 'Reiniciar') // Exibe o Botão com o Valor Reiniciar
}

// Função Assíncrona para mudar a cor
async function mudarCor(cor, tempo) {
    semaforoImg.src = cor; // Captura a Cor do Semáforo
    await aguardar(tempo); // Captura o Tempo do Semáforo na Promise
}

// Função Assíncrona pra exibir o Estado do Botão
async function botaoDisplay(exibir, estado){
    iniciarBtn.style.display = exibir // Exibe o Botão
    iniciarBtn.innerText = estado // Adiciona novo estado ao Botão
}
