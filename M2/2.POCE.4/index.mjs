import { createServer } from 'http';
import { readFile } from 'fs';

const PORT = process.argv[2];

const handleRequest = (req, res) => {
  console.log('request url', req.url);

  if (req.method === 'GET') {
    const filePath = `${req.url}`;
    readFile(filePath, 'utf8', (error, content) => {
      if (error) {
        res.writeHead(404, {});
        res.end('sorry we couldn\'t find your file');
      }
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(content);
    });
  } else {
    res.writeHead(405, {});
    res.end('Method not allowed');
  }
};

createServer(handleRequest).listen(PORT);
console.log(`listening on ${PORT}`);