const BASE_URL = 'http://aplicacoes.segad.rr.gov.br:8080/transparencia/oauth/token';
let userPw = 'ewfWEF55465#@#';
var userName = 'portal_transparencia';
let encoded = btoa(userName+':'+userPw);
export let auth = 'Basic ' + encoded;

