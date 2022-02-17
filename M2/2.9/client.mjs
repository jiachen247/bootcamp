import { get } from 'http';

const handleResponse = (response) => {
  // Compile response data in a data variable.
  // The response may contain multiple "chunks" of data.
  let data = '';

  // Add chunk of data to data var when each "chunk" is received.
  response.on('data', (chunk) => {
    data += chunk;
  });

  // We have received the whole response. Print the full response data.
  response.on('end', () => {
    console.log('Response Data: ', data);
  });
};

// Send an HTTP GET request, handle response with handleResponse callback.
// Handle errors by logging the error message.
get('http://localhost:3004/index.html', handleResponse).on('error', (err) => {
  console.error('Error: ' + err.message);
});