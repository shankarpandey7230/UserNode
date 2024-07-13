import express from 'express';
const app = express();

const PORT = 8000;

app.get('/', (req, res) => {
  //   console.log(req, res, next);

  console.log('we got the request');
  //   must always return
  res.send('from server');
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(` Server is listening at http:localhost:${PORT}`);
});
