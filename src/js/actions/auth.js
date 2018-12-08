// GET AUTH TOKEN
import {FETCH_TOKEN, FETCH_USER, USER_FETCH_SUCCEEDED} from "../constants/action-types";

export const fetchToken = token => ({type: FETCH_TOKEN, payload: token});

export const fetchUserSuccess = user => ({type: USER_FETCH_SUCCEEDED, payload: user});
