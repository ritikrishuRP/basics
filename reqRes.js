const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if(url === '/home'){
        res.write('<html>')
        res.write('<body><h3> Welcome home</h3></body>')
        res.write('</html>')
    }

    if(url === '/about'){
        res.write('<html>')
        res.write('<body><h3> Welcome to About Us page</h3></body>')
        res.write('</html>')
    }

    if(url === '/node'){
        res.write('<html>')
        res.write('<body><h3> Welcome to my Node Js project</h3></body>')
        res.write('</html>')
    }
})

server.listen(4000);