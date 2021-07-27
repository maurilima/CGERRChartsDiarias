
import { BASE_URL } from "../libs/urlApi.js";
import { getAuthKey } from "./getApiKey.js";


// diarias/totais-diarias-por-secretaria-por-exercicio?exercicio=2018&limiteDeRegistros=15';

let headerAuth = new Headers;
let apiKey = await getAuthKey();
let auth = 'Bearer ' + apiKey.access_token;
headerAuth.append('Accept', 'application/json');
headerAuth.append('Authorization', auth);

export async function getApiEndPoint(raw, endPoint) {
    let queryString = Object.keys(raw)
           .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(raw[key])}`)
           .join('&')
    var requestOptions = {
        method: 'GET',
        mode: 'cors',
        headers: headerAuth,
    };
    try {
        let res = await fetch(BASE_URL + endPoint + queryString, requestOptions);
        return await res.json();
    } catch (error) {
        console.log(error)
    }
}


