const Intern = require("../lib/Intern");

describe("Intern", () => {
   
        it("should have a school", () => {
            const intern = new Intern("Sy", 3, "sy@gmail", "uncc");
            expect(intern.getSchool()).toEqual("uncc");
        });
    

});
