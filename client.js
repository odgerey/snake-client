const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    constants
  });

  conn.on('data', function(data) {
    console.log(data.toString());
    conn.end();
  });

  conn.on('connect', function() {
    console.log('Successfully connected to game server');
  });


  conn.on('connect', function () {
    conn.write("Name: AMT");

  });


  conn.setEncoding('utf8'); 

  return conn;
}
module.exports = { connect }