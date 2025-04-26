// ===================================
// 👤 INFORMAÇÕES DO USUÁRIO LOGADO
// ===================================

// --- Atualiza informações do usuário no header ou navbar
function updateUserInfo(user) {
    const userInfoElement = document.getElementById('user-info');
  
    if (user && user.name) {
      userInfoElement.innerHTML = `Olá, <strong>${user.name}</strong>`;
      userInfoElement.classList.remove('d-none');
    } else {
      userInfoElement.innerHTML = '';
      userInfoElement.classList.add('d-none');
    }
  }
  
  // --- Exemplo: buscar usuário logado via API
  async function fetchLoggedUser() {
    try {
      const response = await fetch('/api/auth/user');
      const user = await response.json();
      
      if (user && user.name) {
        updateUserInfo(user);
      }
    } catch (error) {
      console.error('Erro ao buscar usuário logado:', error);
    }
  }
  
  // --- Chama ao carregar página
  document.addEventListener('DOMContentLoaded', fetchLoggedUser);
  