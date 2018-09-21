/*
    Root Reducer - define a função a ser executada por cada "action"
    calcula o "state" da aplicação consoante o "action type"

    "Reducers produce the state of the application."

 */

import { ADD_ARTICLE, DELETE_ARTICLE, ARTICLES_FETCH_SUCCEEDED } from "../constants/action-types";

const initialState = {
    articles: []
};

const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            console.log('add', action.payload);
            return { ...state, articles: [...state.articles, action.payload] };
        case DELETE_ARTICLE:
            return { ...state, articles: [...state.articles.filter((x) => x != action.payload)] };
        case ARTICLES_FETCH_SUCCEEDED:
            console.log('success', action.payload);
            return { ...state, articles: [...state.articles, ...action.payload] };
        default:
            return state;
    }
};;

export default articlesReducer;
