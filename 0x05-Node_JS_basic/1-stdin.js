process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (input) => {
  const name = input.trim();

  if (process.stdin.isTTY) {
    process.stdout.write(`Your name is: ${name}\n`);
    process.exit();
  } else {
    process.stdout.write(`Your name is: ${name}\nThis important software is now closing\n`);
    process.exit();
  }
});

process.stdin.on('error', (err) => {
  process.stderr.write(`Error: ${err}\n`);
  process.exit(1);
});
