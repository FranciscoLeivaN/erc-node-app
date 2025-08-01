const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('¡Hola Mundo! Aplicación mínima de Node.js funcionando.\n');
});

server.listen(port, hostname, () => {
  console.log(`Servidor ejecutándose en http://${hostname}:${port}/`);
});
