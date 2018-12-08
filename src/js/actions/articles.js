import {ADD_ARTICLE, DELETE_ARTICLE, FETCH_ARTICLES} from "../constants/action-types";

// definir as actions de adicionar e apagar articles
// cada action tem de ter um "type" único que a identifica
// opcionalmente pode ter também um "payload" que é normalmente informação necessária à sua execução
export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
export const deleteArticle = article => ({ type: DELETE_ARTICLE, payload: article });

// definir a action para carregar articles da api
export const fetchArticles = () => ({type: FETCH_ARTICLES});
