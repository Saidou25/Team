const Employee = require("../lib/Employee");

describe("Employee", () => {
   
    it("should have a name", () => {
        const employee = new Employee("Sy", 3, "sy@gmail");
        expect(employee.getName()).toEqual("Sy");
    });

    it("should have an idl", () => {
        const employee = new Employee("Sy", 3, "sy@gmail");
        expect(employee.getId()).toEqual(3);
    });

    it("should have an email", () => {
        const employee = new Employee("Sy", 3, "sy@gmail");
        expect(employee.getEmail()).toEqual("sy@gmail");
    });

});
