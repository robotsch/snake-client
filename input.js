let connection

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  if(key === '\u0003') process.exit()
  if(key === 'w') connection.write("Move: up")
  if(key === 's') connection.write("Move: down")
  if(key === 'w') connection.write("Move: right")
  if(key === 'a') connection.write("Move: left")
};



module.exports = setupInput