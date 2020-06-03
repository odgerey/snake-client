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
  connection.write("Move: right");
  connection.write("Move: right");
  connection.write("Move: right");
  } 

  if (key === 's') {
  connection.write("Move: down");
  connection.write("Move: down");
  }

  if (key === 'a') {
   connection.write("Move: left")
  }

  if (key === '56') {
    conn.write ("Say: Ayyyyye")
  }

  if(key === '44') {
    conn.write ("Say: This is grooooovy!")
  }

  if(key === '22') {
    conn.write ("Say: I Byte Back!")
  }
}

module.exports = { setupInput }