'use strict';
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const pokedex = require('./lib/pokedex');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('Hello World');
  res.sendStatus(200);
});

app.get('/pokedex/:pokemon', (req, res) => {
  const pokemon = req.params.pokemon;
  console.log(`Pokedex para: ${pokemon}`);
  res.send(pokedex.info(pokemon));
});

const server = app.listen(8080, () => {
  console.log(`Listening port ${server.address().port}`);
});
