// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import colors from 'colors';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: colors.yellow ('What is the title of your project?'),
    },
    {
        type: 'input',
        name: 'description',
        message: colors.green ('Provide a description of your project:'),
    },
    {
        type: 'input',
        name: 'installation',
        message: colors.yellow ('What are the installation instructions?'),
    },
    {
        type: 'input',
        name: 'usage',
        message: colors.green('What is the usage information?'),
    },
    {
        type: 'input',
        name: 'contributing',
        message: colors.yellow ('What are the contribution guidelines?'),
    },
    {
        type: 'input',
        name: 'tests',
        message: colors.green('What are the test instructions?'),
    },
    {
        type: 'list',
        name: 'license',
        message: colors.yellow ('Choose a license for your project:'),
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: colors.green('Enter your GitHub username:'),
    },
    {
        type: 'input',
        name: 'email',
        message: colors.yellow ('Enter your email address:'),
    },
];
// TODO: Create a function to initialize the app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(colors.white("Generating README with the following data:")); 
        const markdownContent = generateMarkdown(answers);

        fs.writeFile('README.md', markdownContent, (err) =>
        err 
        ? console.error(colors.red('Error writing file:', err))
        : console.log(colors.green('README.md generated successfully!'))
        );

    }).catch((error) => {
        console.error('Error during initialization:', error);
    });
}

init();