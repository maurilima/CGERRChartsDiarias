let h = new Headers();
// myHeaders.append("Content-Type", "application/json");

const BASE_URL = 'http://aplicacoes.segad.rr.gov.br:8080/transparencia/oauth/token'
let userPw = 'ewfWEF55465#@#',
var Usename = 'portal_transparencia'
let encoded = btoa(userPw+':'+Usename);
let auth = 'Basic ' + encoded;


h.append('Accept', 'application/json');
h.append('Authorization', auth );
console.log(auth);

let req = new Request(BASE_URL, {
    method: 'GET',
    headers:h,
    credentials : 'same-origin'

})




fetch(req)
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});


export async function getDataApi(data){
    let raw = JSON.stringify(data)
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }; 
    try {
        let res = await fetch(BASE_URL, requestOptions);
        return await res.json();
    } catch (error) {
        console.log(error)
    }
}
