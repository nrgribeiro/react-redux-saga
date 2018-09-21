
const ENDPOINT = 'http://localhost:8080/data.json';


export function fetchAll() {
    return fetch(ENDPOINT).then(response => response.json(), );
}