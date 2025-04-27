function toggleHamburgueres() {
    // Seleciona todos os hambúrgueres ocultos
    const maisHamburgueres = document.querySelectorAll('#produtos-hamburgueres .d-none');
    
    // Se os hambúrgueres extras estiverem ocultos, mostramos-os
    if (maisHamburgueres.length > 0) {
      maisHamburgueres.forEach(hamburguer => {
        hamburguer.classList.remove('d-none');
      });
      document.getElementById('ver-hamburgueres').textContent = 'Ver menos hambúrgueres'; // Altera o texto do botão
    } else {
      // Se os hambúrgueres extras já estiverem visíveis, ocultamos-os
      document.querySelectorAll('#produtos-hamburgueres article:nth-child(n+4)').forEach(hamburguer => {
        hamburguer.classList.add('d-none');
      });
      document.getElementById('ver-hamburgueres').textContent = 'Ver mais hambúrgueres'; // Restaura o texto do botão
    }
  }
  