const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Hello from the other side')
})

server.listen(3000, ()=>{
    console.log('listening from the port no 3000');
})