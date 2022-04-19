const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
    res.statusCode =200;
    res.setHeader('Content-Type','text/plain');

    res.end('Hello, Fellas!');
});

server.listen(port,hostname,()=>{
    console.log('server online');
});
/*
console.log("Hello, Felas");
function somar(n1,n2){
    console.log(n1+n2);
}
setInterval(function(){
    somar(100,53);
},2000);
*/
