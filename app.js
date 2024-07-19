import express from 'express';

import path from 'path';
const app = express();

const PORT = 8000;

const __dirname = path.resolve();
// console.log(__dirname, '===');

// serving static file from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   //   console.log(req, res, next);

//   console.log('we got the request');
//   //   must always return
//   res.send('<h1>Hello server</h1><hr><p>lorem ipsum lorem ipsum</p>');
// });

// home page controllers
app.get('/', (req, res) => {
  console.log('req received');
  res.sendFile(
    __dirname + '/src/html/index.html'
    // '/Users/shankarpandey/Desktop/DEVELOPER/SHANKAR/Code/BACKEND/User/src/html/index.html'
  );
});

// user registration controller
app.get('/register', (req, res) => {
  console.log('registering in');
  res.sendFile(__dirname + '/src/html/register.html');
});

// user login Controller
app.get('/login', (req, res) => {
  console.log('logging in ');
  res.sendFile(__dirname + '/src/html/login.html');
});

// app.get('/get-user', (req, res) => {
//   res.json({
//     firstName: 'Shankar',
//     lastName: 'Pandey',
//   });
// });

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(` Server is listening at http:localhost:${PORT}`);
});
