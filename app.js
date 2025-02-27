import express from 'express';
import fs from 'node:fs';
import path from 'path';
import { makeHtmlString } from './src/html/fileMerger.js';

const app = express();

const PORT = 8000;

const __dirname = path.resolve();
// console.log(__dirname, '===');

// serving static file from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   //   console.log(req, res, next);

//   console.log('we got the request');
//   //   must always return
//   res.send('<h1>Hello server</h1><hr><p>lorem ipsum lorem ipsum</p>');
// });

// home page controllers
app.get('/', (req, res) => {
  // read the text file
  fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
      console.log(error);
      res.sendFile(
        __dirname + '/src/html/index.html'
        // '/Users/shankarpandey/Desktop/DEVELOPER/SHANKAR/Code/BACKEND/User/src/html/index.html'
      );
    } else {
      console.log(data.split('\n'));
      res.send(makeHtmlString(data.split('\n')));
    }
    // error ?  : console.log(data);
  });
  //   console.log('req received');
});

// user registration controller
app.get('/register', (req, res) => {
  console.log(req.query);

  console.log('registering in');
  res.sendFile(__dirname + '/src/html/register.html');
});

const fileName = 'userList.csv';
app.post('/register', (req, res) => {
  //   console.log(req.body);
  const { name, email, password } = req.body;

  const str = `${name},${email},${password}\n`;
  console.log(str);
  //   create file and write data in file

  fs.appendFile(fileName, str, (error) => {
    // error ? console.log(error) : console.log('data has been written to file');
    error ? res.send(error.message) : res.redirect('/');
    //    res.send(
    //       `<h1 class='alert alert-success'>User created, login with credentials</h1>`
    //     );
  });

  console.log('registering received');
  //   res.sendFile(__dirname + '/src/html/register.html');
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
