
function aumentarQuantidade(botao) {
  const quantidadeEl = botao.previousElementSibling;
  let quantidade = parseInt(quantidadeEl.innerText);
  quantidadeEl.innerText = quantidade + 1;
}

function diminuirQuantidade(botao) {
  const quantidadeEl = botao.nextElementSibling;
  let quantidade = parseInt(quantidadeEl.innerText);
  if (quantidade > 1) {
    quantidadeEl.innerText = quantidade - 1;
  }
}

