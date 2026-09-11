const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 8080;
const DIR = __dirname;
const mimeTypes = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.gif':'image/gif','.svg':'image/svg+xml','.ico':'image/x-icon','.webp':'image/webp'};
const server = http.createServer((req, res) => {
    let filePath = req.url === '/' ? '/index.html' : req.url;
    filePath = path.join(DIR, decodeURIComponent(filePath.split('?')[0]));
    const ext = path.extname(filePath);
    fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(200, {'Content-Type': mimeTypes[ext] || 'text/plain'});
        res.end(data);
    });
});
server.listen(PORT, () => console.log('Running at http://localhost:' + PORT));
