const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school, role) {
        this.school = school;

    }

    getSchool() {
        prompt({
            type: "input",
            message: "Wgat is your intern's school?",
            school: "school",

        })
    }

    getRole() {
        prompt({
            message: "what type of team member would you like to add?",
            role: "role",
        })

        if (`Role: ${this.role}` == "-") {
            return `'Intern'`;

        }
    };
}
module.exports = Intern;
