const BASE_URL = 'http://aplicacoes.segad.rr.gov.br:8080/transparencia/oauth/token';
let userPw = 'ewfWEF55465#@#';
var userName = 'portal_transparencia';
let encoded = btoa(userName+':'+userPw);
let auth = 'Basic ' + encoded;

let headerAuth = new Headers;

headerAuth.append('Accept', 'application/json');
headerAuth.append('Authorization', auth );
headerAuth.append( 'Content-Type','application/x-www-form-urlencoded')

export async function getAuthKey(){
    var requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: headerAuth,
      body: ['grant_type=client_credentials']
    }; 
    try {
        let res = await fetch(BASE_URL, requestOptions);
        return await res.json();
    } catch (error) {
        console.log(error)
    }
}
