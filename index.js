const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/page-template');
const fs = require('fs');
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();

const team = [];

const managerInput = () => 

    prompt([
        {
            type: "input",
            message: "Shat is the team managers name?",
            name: "name",
        },
        {
            type: "input",
            message: "Shat is the team manager'id?",
            name: "id",
        },
        {
            type: "input",
            message: "Shat is the team manager's email?",
            name: "email",
        },
        {
            type: "input",
            message: "Shat is the team manager's office number?",
            name: "officeNumber",
        },
        {
            type: "list",
            message: "Wich type of team member would you like to add??",
            name: "add",
            choices: ["Intern", "Engineer", "I don't want to add more team members"],
        },
    ]).then(( manager) => {
        team.push(manager);
    })
    .catch(err => console.log(err));
managerInput();

// const internInput = [
//     prompt(
//         {
//             input: "input",
//             message: "Shat is your intern's name?",
//             name: "name",
//         },
//         {
//             input: "input",
//             message: "Shat is your intern's id?",
//             name: "id",
//         },
//         {
//             input: "input",
//             message: "Shat is your intern's email?",
//             name: "email",
//         },
//         {
//             input: "input",
//             message: "What is your intern's school?",
//             name: "school",
//         },
//         {
//             type: "list",
//             message: "Wich type of team member would you like to add??",
//             name: "add",
//             choices: ["Intern", "Engineer", "I don't want to add more team members"],

//         })
// ]
//     .then(generateTeamMembers(internInput));

// const engineerInput = [
//     prompt(
//         {
//             input: "input",
//             message: "What is your engineer's name?",
//             name: "name",
//         },
//         {
//             input: "input",
//             message: "Shat is your engineer'id?",
//             name: "id",
//         },
//         {
//             input: "input",
//             message: "Shat is your engineer's email?",
//             name: "email",
//         },
//         {
//             input: "input",
//             message: "Shat is your engineer's GitHub username?",
//             name: "officeGitHubumber",
//         },
//         {
//             type: "list",
//             message: "Wich type of team member would you like to add??",
//             name: "add",
//             choices: ["Intern", "Engineer", "I don't want to add more team members"],
//         })
// ]
//     .then(generateTeamMembers(engineerInput));

// module.exports = Manager;
// module.exports = Engineer;
// module.exports = Intern;