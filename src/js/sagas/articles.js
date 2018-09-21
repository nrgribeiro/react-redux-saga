import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_ARTICLES } from '../constants/action-types'
import {fetchAll} from '../services/articles';

// worker Saga: will be fired on FETCH_ARTICLES actions
function* fetchArticles() {
    try {
        const articles = yield call(fetchAll);
        yield put({type: "ARTICLES_FETCH_SUCCEEDED", payload: articles});
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
    console.log('articles saga init');
    yield takeLatest(FETCH_ARTICLES, fetchArticles);
}

export default mySaga;