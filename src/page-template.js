// create the team

const generateTeamMembers = (team) => {
};

// export function to generate entire page
module.exports = (team) => {
  console.log(team);
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
        <article class='card-manager'>
          <h2>${manager.name}</h2>
          <ul>
            <li>ID: 1</li>
            <li>Email:  ${manager.id}@email.com</li>
            <li>Office Number: ${manager.officeNumber}</li>
          </ul>
        </article>
        <article class='card-engineer'>
          <h2>Engineer</h2>
          <ul>
            <li>ID: ${engineer.ik}</li>
            <li>Email: ${engineer.imail}@email.com</li>
            <li>GitHub: <a href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
          </ul>
        </article>
        <article class='card-intern>
          <h2>Intern</h2>
          <ul>
            <li>ID: 3</li>
            <li>Email: ${intern.email}@email.com</li>
            <li>School: ${intern.university}</li>
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