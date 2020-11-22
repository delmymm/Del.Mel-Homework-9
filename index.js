const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Describe your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How to install your project?',
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
      type: 'list',
      message: 'Select a license for this project.',
      name: 'license',
      choices: [
        'MIT ',
        'Apache',
        'Boost',
      ]
    },
    {
      type: 'input',
      message: 'What is your github username?',
      name: 'username'
    },
    {
      type: 'input',
      message: 'What is the URL to your github profile?',
      name: 'email',
    },
  ]).then(function (response) {
    let generateMarkdown = `# ${response.title}\n
    ${response.description}\n
    ${response.installation}\n
    ${response.usage}\n
    ${response.contribution}\n
    ${response.tests}\n
    ![](https://img.shields.io/badge/license-${response.license}-blue.svg)
    ${response.username}\n
    ${response.email}\n
    `
    writeToFile('README.md', generateMarkdown)
  })  
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return;
    };
  });
}; 