const http = require('http');
const { on } = require('process');
const server = http.createServer();

server.on('request', (req, res) => {
    if (req.method === "POST" && req.url === "/echo") {
        let body = [];

        req.on('data', chuck => {
                body.push(chuck);
            })
            .on('end', () => {
                res.writeHead(200, { 'Content-Type': 'text-plain' })
                body = Buffer.concat(body).toString().split('-');

                const year = body[2];
                const mont = body[1];
                const day = body[0];

                const dayBirthday = new Date(year, mont, day);
                res.end(dayBirthday.toString().split(' ')[0]);

                // res.end('nice');
            })


    } else {
        res.statusCode = 404;
        res.end();
        console.log('Post Error')
    }
});

server.listen(8080);
console.log('server ready')