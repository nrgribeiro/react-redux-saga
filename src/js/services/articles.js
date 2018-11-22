import { ENDPOINT } from '../constants/services'

export function fetchAll() {
    return fetch(ENDPOINT).then(response => response.json(), );
}