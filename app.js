import express from 'express';

import path from 'path';
const app = express();

const PORT = 8000;

const __dirname = path.resolve();
console.log(__dirname, '===');

// app.get('/', (req, res) => {
//   //   console.log(req, res, next);

//   console.log('we got the request');
//   //   must always return
//   res.send('<h1>Hello server</h1><hr><p>lorem ipsum lorem ipsum</p>');
// });

app.get('/', (req, res) => {
  res.sendFile(
    __dirname + '/src/html/index.html'
    // '/Users/shankarpandey/Desktop/DEVELOPER/SHANKAR/Code/BACKEND/User/src/html/index.html'
  );
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(` Server is listening at http:localhost:${PORT}`);
});
