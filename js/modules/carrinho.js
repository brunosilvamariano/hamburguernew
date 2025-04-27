// Array para armazenar os itens do carrinho
let carrinho = [];

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(nome, preco) {
  // Verificar a quantidade selecionada
  const quantidadeElement = document.getElementById('quantidade-' + nome.replace(/\s+/g, ''));
  let quantidadeSelecionada = parseInt(quantidadeElement.textContent);

  // Verificar se a quantidade é maior que zero
  if (quantidadeSelecionada <= 0) {
    alert("Selecione ao menos uma unidade do item antes de adicionar ao carrinho.");
    return;  // Impede a execução do código abaixo se a quantidade for zero ou negativa
  }

  // Verificar se o item já existe no carrinho
  let item = carrinho.find(item => item.nome === nome);

  if (item) {
    item.quantidade += quantidadeSelecionada;  // Aumenta a quantidade do item no carrinho
  } else {
    carrinho.push({ nome, preco, quantidade: quantidadeSelecionada });  // Adiciona o item ao carrinho
  }

  // Atualizar o carrinho no modal
  atualizarCarrinho();
}

// Função para atualizar o carrinho no modal
function atualizarCarrinho() {
  const carrinhoContainer = document.getElementById("carrinho-itens-container");
  carrinhoContainer.innerHTML = '';  // Limpa os itens atuais do carrinho

  let total = 0;

  // Atualiza a lista de itens no carrinho
  if (carrinho.length > 0) {
    carrinho.forEach(item => {
      total += item.preco * item.quantidade;  // Calcula o total para cada item

      // Cria o elemento HTML para cada item do carrinho
      const itemElement = document.createElement("div");
      itemElement.classList.add("d-flex", "justify-content-between", "align-items-center", "mb-3");
      itemElement.innerHTML = `
        <span>${item.nome} (${item.quantidade})</span>
        <span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
        <button class="btn btn-outline-danger btn-sm" onclick="removerDoCarrinho('${item.nome}')">Remover</button>
      `;
      carrinhoContainer.appendChild(itemElement);
    });
  } else {
    carrinhoContainer.innerHTML = "<p class='text-muted'>Seu carrinho está vazio.</p>";
  }

  // Exibe o total final do carrinho
  const totalElement = document.createElement("div");
  totalElement.classList.add("text-end", "mt-3");
  totalElement.innerHTML = `<strong>Total: R$ ${total.toFixed(2)}</strong>`;
  carrinhoContainer.appendChild(totalElement);
}

// Função para remover um item do carrinho
function removerDoCarrinho(nome) {
  const itemIndex = carrinho.findIndex(item => item.nome === nome);
  if (itemIndex !== -1) {
    carrinho.splice(itemIndex, 1);  // Remove o item pelo índice encontrado
  }
  atualizarCarrinho();  // Atualiza o carrinho após a remoção
}

// Função para alterar a quantidade de um item no carrinho
function alterarQuantidade(nomeProduto, ajuste) {
  const quantidadeElement = document.getElementById('quantidade-' + nomeProduto.replace(/\s+/g, ''));
  let quantidadeAtual = parseInt(quantidadeElement.textContent);

  if (quantidadeAtual + ajuste >= 0) {  // Impede que a quantidade seja negativa
    quantidadeElement.textContent = quantidadeAtual + ajuste;  // Atualiza a quantidade na interface

    // Atualiza a quantidade do item no carrinho
    const item = carrinho.find(item => item.nome === nomeProduto);
    if (item) {
      item.quantidade = quantidadeAtual + ajuste;  // Atualiza a quantidade no carrinho
    }
    atualizarCarrinho();  // Atualiza o carrinho após alteração
  }
}

// Evento de clique no botão de adicionar ao carrinho
const addButtons = document.querySelectorAll(".btn-add-carrinho");
addButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const nomeProduto = e.target.dataset.produto;
    const precoProduto = parseFloat(e.target.dataset.preco);
    adicionarAoCarrinho(nomeProduto, precoProduto);  // Chama a função para adicionar o item ao carrinho
  });
});
