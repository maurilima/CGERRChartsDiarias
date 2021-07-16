import { URL_TDSE } from "./config/Config.js";
import { getApisEndPoint } from "./libs/getApiEndPoint.js";
// import { getAuthKey } from "./libs/getApiKey.js";

let raw = {
     execicio : '2018',
     limiteDeRegistros : 15
}

let result = await getApisEndPoint(raw, URL_TDSE);

console.log(result)


// let h = new Headers();
// // myHeaders.append("Content-Type", "application/json");

// const BASE_URL = 'http://aplicacoes.segad.rr.gov.br:8080/transparencia/oauth/token'
// let userPw = 'ewfWEF55465#@#';
// var Usename = 'portal_transparencia'
// let encoded = btoa(Usename+':'+userPw);
// let auth = 'Basic ' + encoded;




// let raw  =  ['grant_type=client_credentials']
// h.append('Accept', 'application/json');
// h.append('Authorization', auth );
// h.append( 'Content-Type','application/x-www-form-urlencoded')
// console.log(auth);

// let req = new Request(BASE_URL, {
//     method: 'POST',
//     headers:h,
//     body : raw 

// })





// fetch(req)
// .then(response => {
//   response.json().then(
//       json => {
//           console.log(json);
      
//       }
//   )
//     })
// .catch(err => {
//   console.error(err);
// });
