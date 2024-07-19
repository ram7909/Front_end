import http from 'http'
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end("You are request for Home Route")
    }
    else if (req.url == '/samosa') {
        res.end('We Dont Have Samosa Right Now')
    }
    else if (req.url == '/colddrink') {
        res.end('you have to pay 100rs for that')
    }
    else if (req.url == '/profile') {
        res.end('Welcome to profile')
    }
    else {
        res.end('404 not found')
    }
});
const port = 1500;
server.listen(port, () => console.log(`Server is Running On Port ${port}`));