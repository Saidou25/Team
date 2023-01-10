const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should have a github", () => {
        const engineer = new Engineer("Sy", 3, "sy@gmail", "Sy");
        expect(engineer.getGithub()).toEqual("Sy");
    });

});
