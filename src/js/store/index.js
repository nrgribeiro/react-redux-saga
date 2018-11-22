import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

// importar os reducers da aplicação
import articles from "../reducers/articles";

// importar os sagas da aplicação
import mySaga from '../sagas/articles';

// inicializar o saga Middleware
const sagaMiddleware = createSagaMiddleware();

// criar a store do Redux
const store = createStore(
    // caso exista mais do que 1 reducer, usar esta função para "combiná-los"
  combineReducers({
    articles,
  }),
    // associar o saga à store do Redux
    applyMiddleware(sagaMiddleware)
);

// executar o middleware sagas
sagaMiddleware.run(mySaga);

export default store;
