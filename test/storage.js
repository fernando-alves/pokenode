'use strict';
const should = require('should');
const Storage = require('../lib/storage');
const MockedRedis = require('./mocks/redis');
const async = require('async');

describe('Storage', () => {

  let trainer, pokemons, redisClient, storage;

  beforeEach(() => {
    trainer = 'fernando';
    pokemons = ['mew'];
    redisClient = new MockedRedis();
    storage = new Storage(redisClient);
  });

  it('should add a trainer', done => {
    storage.addTrainer(trainer, pokemons, () => {
      should(redisClient.storedFor(trainer)).eql(pokemons);
      done();
    });
  });

  it('should list pokemons of a trainer', done => {
    async.series([
      next => storage.addTrainer(trainer, pokemons, next),
      next => storage.trainerPokemons(trainer, (err, storedPokemons) => {
        should.ifError(err);
        should(storedPokemons).eql(pokemons);
        next();
      })
    ], done);
  });
});
