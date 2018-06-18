'use strict';

const async = require('async');
const config = require('../config');
const Builder = require('../lib/builder');
const Storage = require('../lib/storage');

const preseedTrainers = config.preseed;
const redisConfig = config.redis;
const redisClient = Builder.build(redisConfig);

const storage = new Storage(redisClient);

const trainers = Object.keys(preseedTrainers);

const done = err => {
  if (err) {
    process.exit(1);
  }
  redisClient.quit();
};

async.each(
  trainers,
  (trainer, callback) => {
    storage.addTrainer(trainer, preseedTrainers[trainer], callback);
  },
  done
);
