const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        const personagemSelecionado = document.querySelector('.selecionado');
        const imgPersonagemGrande = document.querySelector('.personagem-grande');
        const idPersonagemGrande = personagem.attributes.id.value;
        const nomePersonagem = document.getElementById('nome-personagem');
        const descricaoPersonagem = document.getElementById('descricao-personagem');

        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');

        imgPersonagemGrande.src = `./src/imagens/card-${idPersonagemGrande}.png`;

        nomePersonagem.innerText = personagem.getAttribute('data-name');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})

