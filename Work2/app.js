const chalk = require('chalk');
const log = console.log;

log(chalk.green('Success') + chalk.green('!'));

log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

log(chalk.blue.bgRed.bold('Hello world!'));

console.log(process.argv[2]) // The process.argv tutorial continues on Work3 folder

// const validator = require('validator');
// const getNotes = require('./notes.js');

// const message = getNotes();

// console.log(message);

// console.log(validator.isURL('https://mead.io'));

// Nodemon can be installed using npm instal nodemon -g (g for global)
