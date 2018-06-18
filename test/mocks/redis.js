'use strict';

module.exports = function MockedClient() {
  let self = {};
  let store = {};

  const trainerKey = trainer => `trainer:${trainer}`;

  self.sadd = function(trainer, pokemons, callback) {
    store[trainerKey(trainer)] = pokemons;
    callback();
  };

  self.smembers = function(trainer, callback) {
    return callback(null, store[trainerKey(trainer)]);
  };

  self.storedFor = function(trainer) {
    return store[trainerKey(trainer)];
  };

  return Object.freeze(self);
};
