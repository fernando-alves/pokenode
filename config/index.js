'use stric';

module.exports = {
  web: {
    port: 8080
  },
  preseed: {
    fernando: [
      'bulbassaur',
      'articuno'
    ]
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: 6379
  }
}
