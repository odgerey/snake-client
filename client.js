const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
  });

  conn.on('data', function(data) {
    console.log(data.toString());
    conn.end();
  });

  conn.on('connect', function() {
    console.log('Successfully connected to game server');
  });

 // conn.on('connect', function() {
 //   conn.write("Name: AMT");
 // });

  conn.on('connect', function () {
    conn.write("Name: AMT");
    conn.write("Move: up");
    setInterval(() => conn.write('Move: right'), 500);

  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}
module.exports = { connect }