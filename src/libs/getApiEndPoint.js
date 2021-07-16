import { getAuthKey } from "./getApiKey.js";
const BASE_URL = 'http://aplicacoes.segad.rr.gov.br:8080/transparencia/api/v1/';
// diarias/totais-diarias-por-secretaria-por-exercicio?exercicio=2018&limiteDeRegistros=15';

 let headerAuth = new Headers;
 let apiKey = await getAuthKey();
 let auth = 'Bearer ' + apiKey.access_token;
 headerAuth.append('Accept', 'application/json');
 headerAuth.append('Authorization', auth );
//  headerAuth.append( 'Content-Type','application/x-www-form-urlencoded')

export async function getApisEndPoint(raw, endPoint){
    let queryString =  Object.keys(raw)
                      .map(key =>`${ encodeURIComponent(key)}=${encodeURIComponent(raw[key])}`)
                      .join('&')
                      console.log(queryString)
    var requestOptions = {
      method: 'GET',
      mode: 'cors',
      headers: headerAuth,
    //   body: ['grant_type=client_credentials']
    }; 
    try {
        let res = await fetch(BASE_URL+endPoint+queryString, requestOptions);
        return await res.json();
    } catch (error) {
        console.log(error)
    }
}


// transparencia/api/v1/diarias/totais-diarias-por-secretaria-por-exercicio?exercicio=2018&limiteDeRegistros=10

// fetch("http://aplicacoes.segad.rr.gov.br:8080/transparencia/api/v1/diarias/totais-diarias-por-secretaria-por-exercicio?exercicio=2018&limiteDeRegistros=15", {
//   "method": "GET",
//   "headers": {
//     "cookie": "SERVERID=A",
//     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkIl0sImV4cCI6MTYyNjM4OTgyMywianRpIjoiNzhmODZlOWEtMDkzZS00NjNmLTlhOGMtZDhhNTU5NGM0ZjU1IiwiY2xpZW50X2lkIjoicG9ydGFsX3RyYW5zcGFyZW5jaWEifQ.jWoO_XhZJSwBsfpduLCXMPkTSZfuxUqxyBdQBnReZTE"
//   }
// })
// .then(response => {
//   console.log(response);
// })
// .catch(err => {
//   console.error(err);
// });