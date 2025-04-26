// ===================================
// 📦 FINALIZAR PEDIDO
// ===================================

// --- Evento para clicar em "Finalizar Pedido"
document.getElementById('finalizarPedidoBtn').addEventListener('click', async function() {
    const cartItems = getCartItems(); // Pega itens do carrinho
  
    if (cartItems.length === 0) {
      alert('Seu carrinho está vazio.');
      return;
    }
  
    // --- (OPCIONAL) Enviar para API primeiro para registrar pedido no sistema
    try {
      const response = await fetch('/api/pedidos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items: cartItems })
      });
  
      if (!response.ok) {
        throw new Error('Erro ao registrar pedido no servidor.');
      }
  
      const result = await response.json();
  
      // --- Depois de registrar no sistema, monta link para WhatsApp
      const pedidoMensagem = cartItems.map(item => `${item.name} - R$ ${item.price.toFixed(2)}`).join('\n');
      const whatsappNumber = '55xxxxxxxxxxx'; // Substituir pelo número real
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Pedido:\n${pedidoMensagem}`)}`;
  
      window.open(whatsappUrl, '_blank'); // Abre WhatsApp
      localStorage.removeItem('cartItems'); // Limpa o carrinho depois de finalizar
      updateCartCount(0); // Atualiza contador
    } catch (error) {
      console.error('Erro ao finalizar pedido:', error);
      alert('Erro ao finalizar o pedido. Tente novamente.');
    }
  });
  