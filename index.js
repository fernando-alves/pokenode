'use strict';
const config = require('./config');
const Server = require('./lib/server');

const server = new Server(config);

server.start(() => {
  console.log('Started!');
});

process.on('exit', server.stop);
