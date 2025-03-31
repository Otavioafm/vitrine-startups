import { Auth } from './auth.js';

const auth = new Auth();

// Função para verificar se o usuário está logado
function isUserLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Função para abrir o popup
function openPopup() {
    const popup = document.getElementById('loginPopup');
    const overlay = document.getElementById('popupOverlay');
    if (popup && overlay) {
        popup.classList.add('active');
        overlay.classList.add('active');
    }
}

// Função para fechar o popup
function closePopup() {
    const popup = document.getElementById('loginPopup');
    const overlay = document.getElementById('popupOverlay');
    if (popup && overlay) {
        popup.classList.remove('active');
        overlay.classList.remove('active');
    }
}

// Função para lidar com o clique no botão "Investir"
function handleInvestButtonClick(event) {
    if (!auth.isLoggedIn()) {
        event.preventDefault();
        openPopup();
    }
}


document.querySelectorAll('.invest-button').forEach(button => {
    if (!isUserLoggedIn()) {
        button.classList.add('disabled');
    } else {
        button.classList.remove('disabled');
    }
});

// Função para lidar com o clique no botão "Like"
function handleLikeClick(event) { /* Gerencia clique no botão curtir */ }

// Função para alternar o estado de "like"
function toggleLike(id) {
    if (likedStartups.has(id)) {
        likedStartups.delete(id);
    } else {
        likedStartups.add(id);
    }
    renderStartups(); // Atualiza a lista de startups
}

// Função para lidar com o clique no botão "Anunciar Startup"
function handleStartupClick(event) {
    if (!isUserLoggedIn()) {
        event.preventDefault(); // Impede o comportamento padrão
        openPopup();
    } else {
        window.location.href = 'anunciarStartup.html'; // Redireciona para o formulário
    }
}

// Função para bloquear as abas para usuários não logados
function blockTabsForNonLoggedInUsers() { /* Bloqueia abas para usuários não logados */ }

// Função para lidar com a troca de abas
function setupTabSwitching() {
    const tabs = document.querySelectorAll('.details-tabs .tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            if (tab.classList.contains('disabled')) return; // Impede a troca de aba se estiver desativada

            // Remove a classe 'active' de todas as abas
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Exibe o conteúdo correspondente à aba selecionada
            const activeTab = tab.dataset.tab;
            document.querySelectorAll('[data-content]').forEach(content => {
                content.style.display = content.dataset.content === activeTab ? 'block' : 'none';
            });
        });
    });
}

// Eventos para o Popup
document.addEventListener('DOMContentLoaded', () => {
    // Fechar o popup ao clicar no botão de fechar ou no overlay
    document.getElementById('closePopup')?.addEventListener('click', closePopup);
    document.getElementById('popupOverlay')?.addEventListener('click', (event) => {
        if (event.target === document.getElementById('popupOverlay')) {
            closePopup();
        }
    });

    // Adiciona eventos aos botões "Cadastrar Startup"
    const startupBtn = document.querySelector('.startup-btn');
    if (startupBtn) {
        startupBtn.addEventListener('click', (e) => {
            handleStartupClick(e); // Passa o evento para a função
        });
    }

    // Adiciona eventos aos botões "Investir"
    const investButtons = document.querySelectorAll('.invest-button');
    if (investButtons) {
        investButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                if (!isUserLoggedIn()) {
                    e.preventDefault();
                    openPopup();
                }
            });
        });
    }

    // Adiciona eventos aos botões "Like"
    const likeButtons = document.querySelectorAll('.like-button');
    if (likeButtons) {
        likeButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                handleLikeClick(e); // Passa o evento para a função
            });
        });
    }

    // Redirecionar para hubLogin.html ao clicar no botão "Login" do popup
    const popupLoginButton = document.getElementById('popupLoginButton');
    if (popupLoginButton) {
        popupLoginButton.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o comportamento padrão do link
            window.location.href = 'hubLogin.html'; // Redireciona para a página de login
        });
    }

    // Redirecionar para hubCadastro.html ao clicar no botão "Cadastro" do popup
    const popupCadastroButton = document.getElementById('popupCadastroButton');
    if (popupCadastroButton) {
        popupCadastroButton.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o comportamento padrão do link
            window.location.href = 'hubCadastro.html'; // Redireciona para a página de cadastro
        });
    }

    // Bloqueia as abas para usuários não logados
    blockTabsForNonLoggedInUsers();

    // Configura a troca de abas
    setupTabSwitching();
});

export { openPopup, closePopup, handleInvestButtonClick };