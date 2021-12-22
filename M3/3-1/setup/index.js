import express from 'express';

const app = express();

const handleIncomingRequest = (request, response) => {
  console.log('request came in');
  response.send('yay');
};

app.get('/', handleIncomingRequest);

app.listen(3004);
