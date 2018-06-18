'use strict';

module.exports = function Storage(client) {
  let self = {};

  self.addTrainer = function(name, pokemons, done) {
    client.sadd(name, pokemons, done);
  };

  self.trainerPokemons = function(trainer, done) {
    client.smembers(trainer, done);
  };

  return Object.freeze(self);
};
