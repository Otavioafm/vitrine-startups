// src/api/api.js
const API_BASE_URL = 'http://localhost:3000'; // Ajuste pra URL da sua API

// Função auxiliar pra adicionar o token nas requisições autenticadas
async function fetchWithAuth(url, options = {}) {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return fetch(url, {
    ...options,
    headers,
  });
}

async function fetchStartups() {
  try {
    const response = await fetchWithAuth(`${API_BASE_URL}/startups`);
    if (!response.ok) throw new Error('Erro ao carregar startups');
    return await response.json();
  } catch (error) {
    console.error('Erro na chamada à API de startups:', error);
    throw error;
  }
}

async function fetchCategories() {
  try {
    const response = await fetchWithAuth(`${API_BASE_URL}/categories`);
    if (!response.ok) throw new Error('Erro ao carregar categorias');
    return await response.json();
  } catch (error) {
    console.error('Erro na chamada à API de categorias:', error);
    throw error;
  }
}

async function likeStartup(startupId) {
  try {
    const response = await fetchWithAuth(`${API_BASE_URL}/startups/${startupId}/like`, {
      method: 'POST',
    });
    if (!response.ok) throw new Error('Erro ao curtir startup');
    return await response.json();
  } catch (error) {
    console.error('Erro na chamada à API de curtida:', error);
    throw error;
  }
}

async function shareStartupApi(startupId) {
  try {
    const response = await fetchWithAuth(`${API_BASE_URL}/startups/${startupId}/share`, {
      method: 'POST',
    });
    if (!response.ok) throw new Error('Erro ao compartilhar startup');
    return await response.json();
  } catch (error) {
    console.error('Erro na chamada à API de compartilhamento:', error);
    throw error;
  }
}

async function login(email, password, type = 'investidor') {
  try {
    const response = await fetch(`${API_BASE_URL}/${type}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error('Erro ao fazer login');
    const data = await response.json();
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('token', data.token); // Supondo que a API retorna um token
    return data;
  } catch (error) {
    console.error('Erro na chamada à API de login:', error);
    throw error;
  }
}

async function register(userData, type = 'investidor') {
  try {
    const response = await fetch(`${API_BASE_URL}/${type}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error('Erro ao registrar');
    return await response.json();
  } catch (error) {
    console.error('Erro na chamada à API de registro:', error);
    throw error;
  }
}

export { fetchStartups, fetchCategories, likeStartup, shareStartupApi, login, register };