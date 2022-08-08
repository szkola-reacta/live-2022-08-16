const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

// TODO: move to env vars
const SECRET = 'sdfsdfsB%^&%^&BMBFGG%^&%';

const app = express();

// const PORT = process.env.PORT || 8080;
const PORT = 8080;

const corsOptions = {
  origin: 'http://localhost:3000',
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

// http://localhost:8080/
app.get('/', (_req, res) => {
  res.send('hello world');
});

app.get('/hello', (_req, res) => {
  res.send('hello world x2');
});

app.get('/ping', (_req, res) => {
  res
  .json({
    status: 'ok',
    message: 'hello!'
  });
});

app.post('/command', (req, res) => {
  res.json({
    serverResponse: true,
    data: req.body
  });
});

app.get('/movies', (_req, res) => {

  // 0. zmienne środowiskowe https://www.npmjs.com/package/dotenv
  // 1. request do firebase/airtable (axios lub https://www.npmjs.com/package/whatwg-fetch lub https://www.npmjs.com/package/node-fetch)
  // 2. odebranie danych
  // 3. wstawienie danych do odpowiedzi

  res
  .json({
    status: 'ok',
    message: 'hello!'
  });
});

app.post('/login', (req, res) => {
  const data = req.body;
  console.log('data: ', data);
  if (1 === 1) {
    // udało się znaleźc uytkwnika w bazie

    const token = jwt.sign({
      data: {
        email: data.email
      },
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
    }, SECRET);

    res.status(200).json({
      token: token,
    });
  } else {
    res.status(401).json({
      message: 'login failed'
    });
  }
});

app.post('/favorites', (req, res) => {
  // TODO: read token from headers
  const data = req.body;
  const token = data.token;

  const decoded = jwt.verify(token, SECRET);

  res.status(200).json(decoded);
});

// app.post('/json', (req, res) => {
//   res.status(200).json({
//     serverResponse: true,
//     data: req.body,
//   });
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

