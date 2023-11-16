const express = require('express');
const cors = require('cors');
const app = express();

const APP_PORT = process.env.PORT || 3000;
const APP_URL = process.env.URL || `http://localhost:${APP_PORT}`;

app.use(cors());

app.use(express.json());

app.listen(APP_PORT, () =>
  console.log(`Servidor ouvindo a porta ${APP_PORT}!`)
);