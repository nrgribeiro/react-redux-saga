/*
    Root Reducer - define a função a ser executada por cada "action"
    calcula o "state" da aplicação consoante o "action type"

    "Reducers produce the state of the application."

 */

import {USER_FETCH_SUCCEEDED} from "../constants/action-types";

const initialState = [];

// Criação do Reducer que vai gerir as operações relativas aos articles
// um Reducer recebe sempre 2 parâmetros:
// 1) o state atual
// 2) a action
const userReducer = (state = initialState, action) => {

    // consoante a action irá executar uma operação diferente
    switch (action.type) {

        case USER_FETCH_SUCCEEDED:
            console.log('user: ', action.payload);
            return [ ...state,  action.payload ];
        default:
            // devolver sempre o state atual, para o caso de nenhuma das ações acima corresponderem
            return state;
    }
};;

export default userReducer;
