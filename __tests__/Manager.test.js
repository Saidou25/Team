const Manager = require("../lib/Manager");

describe("Manager", () => {

    it("should have an officeNumber", () => {
        const manager = new Manager("Sy", 3, "sy@gmail", "1234");
        expect(manager.getOfficNumber()).toEqual("1234");
    });
});

