import http from 'http'
const server = http.createServer((req,res)=>{
    console.log(req);
    res.end("You Are Reuested For Something")
});
const port = 1000
server.listen(port,()=>console.log(`Server is Running On Port ${port}`));
