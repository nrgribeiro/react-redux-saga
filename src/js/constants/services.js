export const ENDPOINT = 'http://localhost:8080/data.json';


//
export const CLIENT_ID = "3";
export const REDIRECT_URI = "http://localhost:8080/callback";
export const SECRET = "yfltUDfhEuHE2YyP2jM3s2XJi0KCxiK0CHG3HLee";

// Primeiro endpoint para obter o código de autorização
export const AUTH_ENDPOINT = 'http://localhost:8000/oauth/authorize?' +
    'client_id='+CLIENT_ID +
    '&redirect_uri='+REDIRECT_URI +
    '&response_type=code';

// Segundo endpoint para obter o Access Token
export const TOKEN_ENDPOINT = 'http://localhost:8000/oauth/token';

// OBTER O UTILIZADOR
export const USER_ENDPOINT = 'http://localhost:8000/api/user';