'use strict';
const express = require('express');
const redisBuilder = require('./builder');
const Storage = require('./storage');

module.exports = function Server(config, builder = redisBuilder) {
  let self = {};

  const redisClient = builder.build(config.redis);
  const storage = new Storage(redisClient);
  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello from Pokemon World');
  });

  app.get('/trainer/:trainer', (req, res) => {
    const trainer = req.params.trainer;
    storage.trainerPokemons(trainer, (err, pokemons) => {
      if (err) {
        return res.send(500);
      }
      res.json({
        name: trainer,
        pokemons
      });
    });
  });

  self.start = function(done) {
    app.listen(config.web.port, done);
  };

  self.stop = function() {
    redisClient.quit();
  };

  return Object.freeze(self);
};
