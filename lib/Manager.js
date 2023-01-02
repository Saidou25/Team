const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber, role) {
        this.officeNumber = officeNumber;
    }
    getOfficNumber() {
        prompt({
            type: "input",
            message: "what is the manager's office number?",
            name: "office number",
        })
    }
    getRole() {
        if (`${this.role}` == '-') {
            return `'Manager'`;
        }
    }
}
module.exports = Manager;
