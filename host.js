let http = require('http')
var fs = require('fs')

const PORT = 8080

fs.readFile('./index.html', (error, html) => {
    if (error) throw error;
    http.createServer((request, response) => {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    }).listen(PORT);
});