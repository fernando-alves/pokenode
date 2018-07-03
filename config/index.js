'use stric';

module.exports = {
  web: {
    port: 8080
  },
  preseed: {
    fernando: [
      'bulbassaur',
      'articuno'
    ],
    thomaz: [
      'gyarados',
      'dragonair'
    ],
    gregorio: [
      'pikachu',
      'ratata'
    ] 
  },
  redis: {
    host: 'localhost',
    port: 6379
  }
}
