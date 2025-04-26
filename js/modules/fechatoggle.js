document.addEventListener('DOMContentLoaded', function() {
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);
  
    const navLinks = offcanvasElement.querySelectorAll('a.nav-link, a.dropdown-item');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        const href = link.getAttribute('href');
  
        // Se o link NÃO tem href ou é apenas "#", é um botão de dropdown -> NÃO fecha o offcanvas
        if (!href || href === '#') {
          return; // Sai da função, não faz nada
        }
  
        // Se for um link de âncora (dentro da página)
        if (href.startsWith('#')) {
          event.preventDefault();
  
          offcanvas.hide();
  
          // Espera o offcanvas fechar para rolar até a seção
          offcanvasElement.addEventListener('hidden.bs.offcanvas', function handleHidden() {
            offcanvasElement.removeEventListener('hidden.bs.offcanvas', handleHidden);
  
            const targetElement = document.querySelector(href);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          });
        }
      });
    });
  });