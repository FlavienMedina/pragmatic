var colors = require('colors');
var moment = require('moment');

const commands = ['USER','PASS','LIST','CWD','RETR','STOR','PWD','HELP','QUIT']

export function log(str, color = "magenta", withNewLine = true) {
  const display = colors[color](`${moment().format()} - ${str}`);
  if (withNewLine) {
    console.log(display);
  }
  else {
    process.stdout.write(display)
  }
};

export function argv() {
  return process.argv.slice(2);
};

export function allowedCommand(command) {
  let valid = commands.some(item => item === command);
  if (valid) {console.log(`${command} command exist`.blue)}
  else {console.log(`${command} command doesnt exist`.red)}
};
