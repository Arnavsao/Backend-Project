import express from 'express';

const app = express();

// Middleware, routes, etc.
app.get('/', (req, res) => {
  res.send('Hello World!');
});

export { app };  // Correctly exporting 'app'