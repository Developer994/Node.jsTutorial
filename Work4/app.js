const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// console.log(process.argv)
// console.log(yargs.argv)

// --Customize yarg version--

yargs.version('1.1.0');


// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function () {
        console.log('Removing the note!')
    }
})

// Creating the read command

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('Reading note!')
    }
})

// Creating a list command
yargs.command({
    command: 'list',
    describe: 'list of notes',
    handler: function () {
        console.log('List of notes')
    }
})

// Add, remove, read, list

console.log(yargs.argv);

