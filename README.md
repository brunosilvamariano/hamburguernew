📚 README - Integração Header Hamburgueria Rústica
📋 Descrição do Projeto
Este projeto desenvolve o Header da Hamburgueria Rústica, contendo a navegação principal, carrinho de compras, formulário de busca, links sociais e responsividade total para desktop e mobile.

O foco é garantir uma estrutura semântica, acessível, otimizada para integração com o back-end.

🛠️ Funcionalidades Principais
Header Fixo com logo e menu responsivo (offcanvas em mobile).

Carrinho de Compras com contador de itens dinâmico e modal de visualização.

Formulário de Busca de produtos no cardápio.

Integração WhatsApp para finalização do pedido.

Links Sociais com Instagram, Facebook e WhatsApp.

Exibição de Nome do Usuário (se autenticado).

📄 Estrutura de Código
Logo:
<a href="/"> com imagem logo.svg.

Carrinho:

Botão com ícone do carrinho (<i class="bi bi-cart3">).

Contador dinâmico (id="cart-count").

Modal para exibir itens (id="carrinhoModal").

Menu Offcanvas (Mobile):
Links de navegação para Home, Cardápio (dropdown), Sobre e Contato.

Formulário de Busca:

Input de busca (role="search", placeholder="Buscar no cardápio...").

Resultado da pesquisa deve ser tratado no back-end.

Redes Sociais:

Instagram

Facebook

WhatsApp (com mensagem para número 47 99159-7258).

Informações do Usuário:

Área visível apenas se o usuário estiver autenticado (id="user-info", data-user-info).

🧩 Integração com Back-End
📦 Elementos que Devem Ser Manipulados:

Elemento	Função	Como acessar
#cart-count	Atualizar número de itens no carrinho	document.getElementById('cart-count')
#carrinho-itens-container	Popular o modal com produtos	document.getElementById('carrinho-itens-container')
#finalizarPedidoBtn	Disparar finalização de pedido	document.getElementById('finalizarPedidoBtn')
data-user-info	Exibir nome/status do usuário	querySelector('[data-user-info]')
form[role="search"]	Capturar buscas de produtos	document.querySelector('form[role="search"]')
🔌 APIs ou Endpoints Previstas:
Buscar Produtos:
GET /buscar?query=palavra-chave
→ Retorna produtos relacionados à pesquisa.

Enviar Pedido via WhatsApp:

Direto via link:
https://wa.me/5547991597258?text=mensagem%20do%20pedido

🧪 Scripts Inclusos
updateCartCount(count) → Atualiza número de itens no carrinho.

addToCart(item) → Lógica para adicionar item no carrinho.

updateCartModal(cartItems) → Preenche o modal com os itens do carrinho.

searchForm.addEventListener('submit', function...) → Captura pesquisa no input de busca.

finalizarPedidoBtn.addEventListener('click', function...) → Envia pedido via WhatsApp.

updateUserInfo(user) → Atualiza área de boas-vindas para usuário logado.

⚡ Tecnologias Utilizadas
HTML5 + Bootstrap 5 + Bootstrap Icons

JavaScript ES6

Google Fonts (tipografia personalizada)

Font Awesome (caso queira expandir ícones no futuro)

🔖 Observações Finais
A estrutura já está semântica, acessível e preparada para API.

Pode ser facilmente adaptada para armazenar itens em localStorage, sessionStorage, ou integrar com APIs RESTful.

O WhatsApp está configurado com mensagem padrão no botão "Finalizar Pedido".

📫 Contato para Dúvidas
Em caso de dúvidas ou suporte técnico sobre a estrutura, entre em contato com o responsável pelo Front-End.

