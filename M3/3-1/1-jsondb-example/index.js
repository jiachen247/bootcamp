import express from 'express';
import { read } from './jsonFileStorage.js';

const app = express();

const handleIncomingRequest = (request, response) => {
  read('data.json', (err, data) => {
    // Respond with the name at the index specified in the URL
    response.send(data.names[request.params.index]);
  });
};

// index is a URL path parameter
app.get('/names/:index', handleIncomingRequest);

app.listen(3004);
