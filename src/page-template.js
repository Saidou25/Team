// create the team
const team = require('./')
const generateTeamMembers = (team) => {

};

// export function to generate entire page
module.exports = (team) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MY TEAM</title>
    </head>
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <main>
        <article>
          <h2>Manager</h2>
          <ul>
            <li>ID: 1</li>
            <li>Email: manager@email.com</li>
            <li>Office Number: 123</li>
          </ul>
        </article>
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
      </main>
      <footer>
        &copy; 2022-2023
      </footer>
    </body>
    </html>
    `;
};