// ===================================
// 🛍️ ATUALIZAÇÃO DO MODAL DE ITENS
// ===================================

// --- Atualiza a lista de itens do carrinho dentro do Modal
function updateCartModal() {
    const cartContainer = document.getElementById('carrinho-itens-container');
    const cartItems = getCartItems(); // Busca itens do carrinho
  
    cartContainer.innerHTML = ''; // Limpa conteúdo anterior
  
    if (cartItems.length === 0) {
      cartContainer.innerHTML = '<p class="text-muted">Seu carrinho está vazio.</p>';
    } else {
      cartItems.forEach(item => {
        const itemHTML = `
          <div class="cart-item d-flex justify-content-between border-bottom py-2">
            <div>
              <strong>${item.name}</strong><br>
              <small>${item.description || ''}</small>
            </div>
            <span>R$ ${item.price.toFixed(2)}</span>
          </div>
        `;
        cartContainer.innerHTML += itemHTML;
      });
    }
  }
  
  // --- Atualiza Modal quando o botão de carrinho for clicado
  document.getElementById('openCartModalBtn').addEventListener('click', updateCartModal);
  