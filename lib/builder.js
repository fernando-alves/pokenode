'use strict';

const redis = require('redis');
const TRAINER_NAMESPACE = 'trainer:';

const build = options => {
  const redisConfig = Object.assign({}, { prefix: TRAINER_NAMESPACE }, options);
  return redis.createClient(redisConfig);
};

module.exports = {
  build
};
