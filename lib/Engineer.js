const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github, role) {
        this.github = github;
        this.role = role;
    }

    // `github` & mdash;GitHub username

    getGithub() {
        prompt({
            type: "input",
            message: "What is your github?",
            github: "github",
        })
    }

    getRole() {
        prompt({
            message: "what type of team member would you like to add?",
            role: "role",
        })

        if (`Role: ${this.role}` == "-") {
            return `'Engineer'`;

        }
    }
}
module.exports = Engineer;
