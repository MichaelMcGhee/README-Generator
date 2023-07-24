// TODO: Include packages needed for this application
import fs from 'fs';
import { createPromptModule } from 'inquirer';

const prompt = createPromptModule();

// TODO: Create an array of questions for user input
const questions = [
       {
         type: 'input',
         name: 'title',
         message: 'Enter the title of your project:',
       },
       {
         type: 'input',
         name: 'description',
         message: 'Enter a short description of your project:',
       },
       {
         type: 'input',
         name: 'installation',
         message: 'Enter the installation instructions:',
       },
       {
         type: 'input',
         name: 'usage',
         message: 'Enter the usage information:',
       },
       {
         type: 'input',
         name: 'license',
         message: 'Enter the license information:',
       },
       {
         type: 'input',
         name: 'contributing',
         message: 'Enter the contributing guidelines:',
       },
       {
         type: 'input',
         name: 'tests',
         message: 'Enter the test instructions:',
       },
       {
         type: 'input',
         name: 'username',
         message: 'Enter your GitHub username:',
       },
       {
         type: 'input',
         name: 'email',
         message: 'Enter your email address:',
       },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 fs.writeFile(fileName, data, (err) => {
   if (err) {
     console.error(err);
   } else {
     console.log(`${fileName} successfully created!`);
   }
 });
}
function generateREADME(answers) {
}
// TODO: Create a function to initialize app
async function init() {
 try {
   const answers = await prompt(questions);
   const readmeContent = generateREADME(answers);
   writeToFile('README.md', readmeContent);
 } catch (error) {
   console.error('An error occurred:', error);
 }
}
 // Function call to initialize app
init();
