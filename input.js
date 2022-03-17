let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') process.exit();
  switch (key) {

  case 'w':
    connection.write('Move: up');
    break;
  case 'a':
    connection.write('Move: left');
    break;
  case 's':
    connection.write('Move: down');
    break;
  case 'd':
    connection.write('Move: right');
    break;
  case 'b':
    connection.write('Say: Boop');
    break;
  case 'f':
    connection.write('Say: Paying respects');
    break;
  }
};



module.exports = setupInput;