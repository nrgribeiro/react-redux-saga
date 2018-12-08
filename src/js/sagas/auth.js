import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_TOKEN, TOKEN_FETCH_SUCCEEDED, TOKEN_FETCH_ERROR } from '../constants/action-types'

// constante com o endereço da API
import {TOKEN_ENDPOINT, CLIENT_ID, REDIRECT_URI, SECRET} from "../constants/services";

// função para obter o Access Token que irá identificar o utilizador
// tem de ser um pedido do tipo POST com todos os parâmetros no BODY
function fetchAll(code) {

    console.log('fetch token ', code.payload);

    // Construção do objeto de BODY do pedido
    const data = new URLSearchParams();
    let url_params = [
        ['client_id', CLIENT_ID],
        ['redirect_uri',REDIRECT_URI],
        ['grant_type','authorization_code'],
        ['client_secret',SECRET],
        ['code', code.payload]
    ];

    for (const pair of url_params) {
        data.append(pair[0], pair[1]);
    }

    // pedido para obter o access token
    return fetch(TOKEN_ENDPOINT, {method: 'post', body: data}).then(response => response.json(), );
}

// worker Saga: irá ser invocada quando ocorrer um FETCH_TOKEN action
function* fetchToken(code) {
    try {
        // invocar a função para obter o access token
        const token = yield call(fetchAll, code);
        // assim que houver uma resposta da API, invoca a action, enviado o novo access token
        yield put({type: TOKEN_FETCH_SUCCEEDED, payload: token});
    } catch (e) {
        // caso exista um erro, devolve a mensagem de erro
        yield put({type: TOKEN_FETCH_ERROR, message: e.message});
    }
}

/*
  Utilizar a função takeLatest para evitar multiplas chamadas à API
  Caso ocorram múltiplas chamadas irá ignorar todas à excepção da última
*/
function* tokenSaga() {
    console.log('token saga init');
    yield takeLatest(FETCH_TOKEN, fetchToken);
}

export default tokenSaga;