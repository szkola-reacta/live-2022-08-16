const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
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

// app.post('/json', (req, res) => {
//   res.status(200).json({
//     serverResponse: true,
//     data: req.body,
//   });
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

