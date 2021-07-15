let h = new Headers();
// myHeaders.append("Content-Type", "application/json");

const BASE_URL = 'http://aplicacoes.segad.rr.gov.br:8080/transparencia/oauth/token'
let userPw = 'ewfWEF55465#@#';
var Usename = 'portal_transparencia'
let encoded = btoa(userPw+':'+Usename);
let auth = 'Basic ' + encoded;
let formdata = new FormData();



formdata.append('grant_type','client_credentials');
// formdata.append('username','testname');


h.append('Accept', 'application/json');
h.append('Authorization', auth );
h.append( 'Content-Type','application/x-www-form-urlencoded')
console.log(auth);

let req = new Request(BASE_URL, {
    method: 'POST',
    headers:h,
    body : formdata
 

})





fetch(req)
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});