'use strict';
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const pokedex = require('./lib/pokedex');
const imageToAscii = require('image-to-ascii');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/pokedex/:pokemon', (req, res) => {
  const pokemon = req.params.pokemon;
  imageToAscii(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`, { colored: false, size: { height: '75%' }, white_bg: false }, (err, converted) => {
    if (err) {
      return res.sendStatus(404)
    }
    res.send(converted);
  });
});

const server = app.listen(8080, () => {
  console.log(`Listening port ${server.address().port}`);
});
