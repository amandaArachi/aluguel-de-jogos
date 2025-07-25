function alterarStatus(id) {
    let jogoClicado = document.getElementById(`game-${id}`);
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let nomeJogo= jogoClicado.querySelector('.dashboard__item__name').textContent;

        if(imagem.classList.contains('dashboard__item__img--rented')) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            alert(`ATENÇÃO: Você possui ${nomeJogo}, deseja devolvê-lo? Esta ação não terá volta!`);

        } else {
            imagem.classList.add('dashboard__item__img--rented'); 
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';
        }
}

