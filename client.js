const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
  });

  conn.on('data', function(data) {
    console.log(data.toString());
    client.end();
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}
module.exports = { connect }