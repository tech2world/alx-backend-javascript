process.stdin.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (input) => {
  const name = input.toString().trim();

  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
  }

  process.stdout.write('This important software is now closing\n');
  process.exit();
});
