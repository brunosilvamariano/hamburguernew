// ========== 🔍 CONTROLE DE BUSCA NO CARDÁPIO ==========

// Captura o formulário de busca
const searchForm = document.querySelector('form[role="search"]');

searchForm.addEventListener('submit', async function(event) {
  event.preventDefault(); // Evita recarregar a página
  
  const input = event.target.querySelector('input[type="search"]');
  const query = input.value.trim();

  if (!query) {
    alert('Digite algo para buscar.');
    return;
  }

  try {
    // Exibe um carregando (opcional)
    showLoading(true);

    // Chamada para a API (back-end deve implementar a rota /buscar)
    const response = await fetch(`/buscar?query=${encodeURIComponent(query)}`);
    const data = await response.json();

    if (data.success) {
      displaySearchResults(data.results);
    } else {
      alert('Nenhum item encontrado.');
    }
  } catch (error) {
    console.error('Erro ao buscar:', error);
    alert('Erro ao buscar itens. Tente novamente.');
  } finally {
    showLoading(false);
  }
});

// Exibe os resultados da pesquisa
function displaySearchResults(results) {
  const resultsContainer = document.getElementById('search-results-container') || createResultsContainer();
  resultsContainer.innerHTML = '';

  results.forEach(item => {
    resultsContainer.innerHTML += `
      <div class="search-item mb-3 p-3 border rounded bg-dark text-white">
        <h5>${item.name}</h5>
        <p>${item.description}</p>
        <strong>R$ ${item.price.toFixed(2)}</strong>
      </div>
    `;
  });
}

// Cria dinamicamente o container de resultados se não existir
function createResultsContainer() {
  const container = document.createElement('div');
  container.id = 'search-results-container';
  document.body.appendChild(container);
  return container;
}

// Exibe ou esconde a animação de carregamento
function showLoading(show) {
  // Aqui você pode mostrar ou esconder um spinner, por exemplo
  const spinner = document.getElementById('loading-spinner');
  if (spinner) {
    spinner.style.display = show ? 'block' : 'none';
  }
}
