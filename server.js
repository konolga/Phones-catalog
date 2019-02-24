let http = require('http');
let static = require('node-static');
const port = 5000;
//import http from 'http', pattern module
const file = new static.Server('.',{
    cache: 0,
    headers: {
        'Access-control-Allow-Origin':'*', //CORS policy
        'Access-control-Allow-Methods':'POST,GET',
        'Access-control-Allow-Headers':'Content-type'

    }
});

http
.createServer((request,response)=>{
    file.serve(request,response);
})
.listen(port);
console.log(`server running on ${port}`);