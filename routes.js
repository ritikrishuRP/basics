const fs = require('fs')
const path = require('path')

const requestHandler = (req,res) => {
    const url  = req.url;
    const method = req.method;
    if(url === '/'){
        const filePath = path.join(__dirname, "message.txt");
    
        fs.readFile(filePath, {encoding: "utf-8"}, (err, data) => {
            if(err){
                console.log(err);
            }
        console.log(`data from file` + data);
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write(`<body>${data}</body>`);
        res.write('<body><form action = "/message" method="POST"><input type="text" name="message"><button type="submit"> Send </button> </form></body>')
        res.write('</html>')
        return res.end();
    });
    }
    else if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                if(err){
                    console.log(err);
                }
                console.log('indise fs.writefile')
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    
    }
    else{
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>');
        res.write("<body><h1>Hello from my Node.js Server</h1></body>");
        res.write('</html>');
        res.end();
    } 
}

module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };
 
// exports.handler = requestHandler;
// exports.someText = 'Some hard coded text'