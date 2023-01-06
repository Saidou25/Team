const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/page-template');
const fs = require('fs');
const { prompt } = require("inquirer");
// const prompt = inquirer.createPromptModule();

const team = [];

const managerInput = () =>

    prompt([
        {
            type: "input",
            message: "What is the team managers name?",
            name: "name",
        },
        {
            type: "input",
            message: "Shat is the team manager'id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the team manager's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "officeNumber",
        },

    ]).then(({ name, id, email, officeNumber }) => {
        const newManager = new Manager(name, id, email, officeNumber);
        team.push(newManager);
        lastQuest();

    })
        .catch(err => console.log(err));
managerInput();

const internInput = () =>
    prompt([
        {
            type: "input",
            message: "What is your intern's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your intern's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your intern's school?",
            name: "school",
        },

    ]).then(({ name, id, email, school }) => {
        const newIntern = new Intern(name, id, email, school);
        team.push(newIntern);
        lastQuest();


    }).catch(err => console.log(err));

const engineerInput = () =>
    prompt([
        {
            type: "input",
            message: "What is your enginner's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your enginner's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your enginner's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your enginner github?",
            name: "github",
        },

    ]).then(({ name, id, email, github }) => {
        const newEngineer = new Engineer(name, id, email, github);
        team.push(newEngineer);
        lastQuest();


    }).catch(err => console.log(err));


const lastQuest = () =>
    prompt(
        {
            type: "list",
            message: "Wich type of team member would you like to add??",
            name: "add",
            choices: ["Intern", "Engineer", "I don't want to add more team members"],
        },
    )
        .then((answers) => {
            if (answers.add === "Intern") {
                internInput();
            } else if (answers.add === "Engineer") {
                engineerInput();
            } else {
                // generate html
            }
        })

const generateHtml = () => {
    const html = `<!-- Instructor provided template -->
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ENTER PAGE TITLE HERE</title>
      <!-- Minified version -->
      <style>
        @import "https://cdn.simplecss.org/simple.min.css";
    
        main {
          display: grid;
          grid-column: 1/-1;
          justify-items: center;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
          max-width: 1140px;
          margin: auto;
        }
    
        @media screen and (max-width: 1140px) {
          main {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media screen and (max-width: 720px) {
          main {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </head>
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <main>
    ${generateEmployeeCards ()}
      </main>
      <footer>
        &copy; 2022-2023
      </footer>
    </body>
    </html>
    
    
    `

}
const generateEmployeeCards = () => {
const card = team.map(teamMember => {
   const role = teamMember.getRole()
   if (role === "Manager") {
    return `<article>
    <h2>Manager</h2>
    <ul>
      <li>ID: ${teamMember.id}</li>
      <li>Email: manager@email.com</li>
      <li>Office Number: 123</li>
    </ul>
    </article>`
   }
})
return card.join("");
}


<article>
<h2>Engineer</h2>
<ul>
  <li>ID: 2</li>
  <li>Email: engineer@email.com</li>
  <li>GitHub: <a href="#github">person</a></li>
</ul>
</article>


<article>
<h2>Intern</h2>
<ul>
  <li>ID: 3</li>
  <li>Email: intern@email.com</li>
  <li>School: FUN University</li>
</ul>
</article>