class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
     
    }


    getName() {
        prompt({
            type: "input",
            message: "what is the imployee's name?",
            name: "name",
        })
    }

    getId() {
        prompt({
            type: "input",
            message: "what is the employee's id",
            name: "id",
        })
    }

    getEmail() {
        prompt({
            type: "input",
            message: "what is the imployee's email?",
            name: "email",
        })
    }

    getRole() {
        prompt({
            type: "input",
            message: "what is the employyee's role?",
            name: "role",
        })
        if (`Role: ${this.role}` == "-") {
            returns`'Employee'`
        }

           

    }
}

module.exports = Employee;
