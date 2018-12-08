/*
    Root Reducer - define a função a ser executada por cada "action"
    calcula o "state" da aplicação consoante o "action type"

    "Reducers produce the state of the application."

 */

import { ADD_ARTICLE, DELETE_ARTICLE, ARTICLES_FETCH_SUCCEEDED } from "../constants/action-types";

const initialState = [];

// Criação do Reducer que vai gerir as operações relativas aos articles
// um Reducer recebe sempre 2 parâmetros:
// 1) o state atual
// 2) a action
const articlesReducer = (state = initialState, action) => {

    // consoante a action irá executar uma operação diferente
    switch (action.type) {

        case ADD_ARTICLE:
            console.log('add: ', action.payload);
            // adiciona o novo artigo ao state
            // Utiliza o Object Spread para criar um novo objeto composto pela fusão do state atual (...state)
            // e do novo state (articles: [...state.articles, action.payload])
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals
            return [ ...state,  action.payload ];
        case DELETE_ARTICLE:
            console.log('delete: ', action.payload);
            // apaga um artigo do state
            // utiliza a função filter para obter todos os articles excepto o que for enviado pela action
            return { ...state, ...state.filter((x) => x !== action.payload) };
        case ARTICLES_FETCH_SUCCEEDED:
            console.log('success: ', action.payload);
            // adiciona os artigos obtidos através da API
            // funcionamento idêntico ao ADD_ARTICLE, mas com a diferença de se aplicar o Spread ao payload
            // pois o que é retornado da API é uma lista de artigos e não apenas um
            return [ ...state, ...action.payload ];
        default:
            // devolver sempre o state atual, para o caso de nenhuma das ações acima corresponderem
            return state;
    }
};;

export default articlesReducer;
