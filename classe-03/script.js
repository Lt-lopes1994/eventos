const botao = document.querySelector('.btn');
const botaoCancelar = document.querySelector('.cancelar');
const botaoConfirmar = document.querySelector('.confirmar');
const modal = document.querySelector('.modal');

botao.addEventListener('click', () => {
  if (botao.textContent === "INSCRITO") {
    modal.classList.remove('escondido');
  } else {
    botao.textContent = "INSCRITO";
    botao.classList.add('inscrito');
  };
});

botaoCancelar.addEventListener('click', () => {
  modal.classList.add('escondido');
});

botaoConfirmar.addEventListener('click', () => {
  modal.classList.add('escondido');
  botao.textContent = 'INSCREVER-SE';
  botao.classList.remove('inscrito');
})