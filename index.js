const http = require('http')
const server = http.createServer((req,res)=>{
    res.end('yes server is created')
})

server.listen(3000,()=>{
    console.log('Listening Port 3000');
})