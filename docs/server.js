const http = require('http');
const fs = require('fs');
const path = require('path');

// Server erstellen
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Den Pfad zur HTML-Datei finden
        const filePath = path.join(__dirname,'registration.html');

        // HTML-Datei lesen
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
            } else {
                // Erfolgreiches Lesen der Datei
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});

// Server auf Port 3000 starten
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
