// ===================================
// 🔍 BUSCA DINÂMICA NO CARDÁPIO
// ===================================

// --- Captura formulário de busca
const searchForm = document.querySelector('form[role="search"]');

// --- Adiciona evento de submit ao formulário
searchForm.addEventListener('submit', async function(event) {
  event.preventDefault(); // Não recarrega página

  const searchQuery = event.target.querySelector('input[name="query"]').value;

  try {
    // Envia para a rota do back-end que busca no banco de dados
    const response = await fetch(`/api/menu/search?query=${encodeURIComponent(searchQuery)}`);
    const data = await response.json();

    if (data.success && data.results.length > 0) {
      displaySearchResults(data.results);
    } else {
      alert('Nenhum item encontrado.');
    }
  } catch (error) {
    console.error('Erro na pesquisa:', error);
    alert('Houve um erro ao pesquisar.');
  }
});

// --- Função que renderiza os resultados da busca
function displaySearchResults(results) {
  const resultsContainer = document.getElementById('search-results-container');
  resultsContainer.innerHTML = ''; // Limpa anterior

  results.forEach(item => {
    const resultHTML = `
      <div class="search-item p-3 mb-2 border rounded bg-light">
        <h5>${item.name}</h5>
        <p>${item.description}</p>
        <strong>R$ ${item.price.toFixed(2)}</strong>
      </div>
    `;
    resultsContainer.innerHTML += resultHTML;
  });
}
