const express = require('express');
const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }))


app.post('/', (recebi, respondi) => {
    console.log(recebi.body);
    respondi.json(recebi.body);
}).listen(port);

 /*const http = require('http');

 http.createServer((request,response) => {
     response.writeHead(200,{
         'Content-Type':'text-plain'
     });
     response.write('O pai ta On ');
     response.end();
       
 }).listen(3000);*/