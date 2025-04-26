// ===================================
// 🛒 GERENCIAMENTO DO CARRINHO
// ===================================

// --- Atualiza a contagem de itens no carrinho visualmente
function updateCartCount(cartItemCount) {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cartItemCount;
    
    if (cartItemCount > 0) {
      cartCountElement.classList.remove('d-none'); // Mostra contador
    } else {
      cartCountElement.classList.add('d-none'); // Esconde contador
    }
  }
  
  // --- Recupera os itens do carrinho (localStorage) para trabalhar no front-end
  function getCartItems() {
    const cartData = localStorage.getItem('cartItems');
    return cartData ? JSON.parse(cartData) : []; // Se existir dados, converte para objeto; se não, retorna array vazio
  }
  
  // --- Salva os itens atualizados no carrinho (localStorage)
  function saveCartItems(cartItems) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
  
  // --- Função para adicionar um novo item ao carrinho
  function addToCart(item) {
    const cartItems = getCartItems(); // Pega carrinho atual
    cartItems.push(item); // Adiciona novo item
    saveCartItems(cartItems); // Salva carrinho atualizado
    updateCartCount(cartItems.length); // Atualiza contador visual
  }
  
  // --- Inicializa o contador do carrinho ao carregar a página
  document.addEventListener('DOMContentLoaded', function() {
    const cartItems = getCartItems();
    updateCartCount(cartItems.length);
  });
  