let connection;

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key)
  }) 
  return stdin;
}

const handleUserInput = function (key) {
  console.log(key)
  if (key === '\u0003') {
    process.exit();
  } 
  if (key === 'w') {
  connection.write("Move: up");
  }

  if (key === 'd') {
  connection.write("Move: right");
  } 

  if (key === 's') {
  connection.write("Move: down");
  }

  if (key === 'a') {
   connection.write("Move: left")
  }

  if (key === '5') {
    connection.write ("Say: Ayyyyyyyyyye")
  }

  if(key === '4') {
    connection.write ("Say: This is groooovy")
  }

  if(key === '2') {
    connection.write ("Say: 1 6yt3 64CK!")
  }
}

module.exports = { setupInput }