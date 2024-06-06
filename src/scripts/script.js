const semaforoImg = document.getElementById('semaforoImg'); // Obter elemento da imagem
const iniciarBtn = document.getElementById('iniciarBtn'); // Obter elemento do botão

/*Cria uma Lista de Cores para modificar a imagem*/
const cores = {
  vermelho: 'src/img/vermelho.png', /*Imagem Farol Vermelho*/
  amarelo: 'src/img/amarelo.png', /*Imagem Farol Amarelo*/
  verde: 'src/img/verde.png', /*Imagem Farol Verde*/
  desligado: 'src/img/desligado.png' /*Imagem Farol Desligado*/
};

/*Função de Modificar a Cor*/
const mudarCorSemaforo = (cor, tempo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const corSinal = cores[cor]; // Captura a Cor
      semaforoImg.src = corSinal; // Define a Imagem e Troca
      resolve(); // Notifica sucesso sem valor
    }, tempo);
  });
};

/*Adiciona Evento no Botão*/
iniciarBtn.addEventListener('click', async () => {
  try {
    iniciarBtn.classList.add('hide-button'); /*Esconde o Botão*/
    await mudarCorSemaforo('vermelho', 500); /*Farol Vermelho*/
    await mudarCorSemaforo('amarelo', 3000); /*Farol Amarelo*/
    await mudarCorSemaforo('verde', 2000); /*Farol Verde*/
    await mudarCorSemaforo('desligado', 5000); /*Farol Desligado*/
    iniciarBtn.classList.remove('hide-button'); /*Aparece o Botão*/
    iniciarBtn.innerText = 'Reiniciar'; /*Muda o valor para reiniciar*/
  } catch (error) {
    console.error(error); /*Caso ocorra um erro, mostra no console*/
  }
});
