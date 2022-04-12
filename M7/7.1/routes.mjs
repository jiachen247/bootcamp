import { resolve } from 'path';

export default function bindRoutes(app) {
  // Root route returns the Webpack-generated main.html file
  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
