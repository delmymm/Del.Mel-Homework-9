const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title name?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Describe your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How to install project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How is the project used?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Who contributed to the project?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'List tests for the project?',
      name: 'tests',
    },
    {
      type: 'checkbox',
      message: 'Select a licencse for this project.',
      name: 'username'
    },
    {
      type: 'input',
      message: 'What is your github username?',
      name: 'username'
    },
    {
      type: 'input',
      message: 'What is your github username?',
      name: 'github'
    },
    {
      type: 'input',
      message: 'What is the URL to your github profile?',
      name: 'email',
    }
  ])
  .then((response) =>
    console.log(response)
  );