import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'

import articles from "../reducers/articles";
import mySaga from '../sagas/articles'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    articles,
  }),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);

export default store;
