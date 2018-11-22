import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_ARTICLES, ARTICLES_FETCH_SUCCEEDED, ARTICLES_FETCH_ERROR } from '../constants/action-types'

// constante com o endereço da API
import {ENDPOINT} from "../constants/services";

// função para obter os dados da API em formato JSON
function fetchAll() {
    return fetch(ENDPOINT).then(response => response.json(), );
}

// worker Saga: irá ser invocada quando ocorrer um FETCH_ARTICLES action
function* fetchArticles() {
    try {
        // invocar a função para obter a lista de artigos
        const articles = yield call(fetchAll);
        // assim que houver uma resposta da API, invoca a action, enviado os novos artigos obtidos
        yield put({type: ARTICLES_FETCH_SUCCEEDED, payload: articles});
    } catch (e) {
        // caso exista um erro, devolve a mensagem de erro
        yield put({type: ARTICLES_FETCH_ERROR, message: e.message});
    }
}

/*
  Utilizar a função takeLatest para evitar multiplas chamadas à API
  Caso ocorram múltiplas chamadas irá ignorar todas à excepção da última
*/
function* mySaga() {
    console.log('articles saga init');
    yield takeLatest(FETCH_ARTICLES, fetchArticles);
}

export default mySaga;