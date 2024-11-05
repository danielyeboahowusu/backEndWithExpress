const express = require('express');

const home =(req,res)=>{
res.send('Welcome Home')
}

server = express();
server.post('/about',(req,res)=>{res.send('About Page')});
server.delete('/service',(req,res)=>{res.send('Information Deleted')});
server.put('/contact',(req,res)=>{res.send('Put Method')});
server.get('/',home);

server.listen(4000,'localhost',()=>console.log('Server is Listening'))

