const Engineer = require("../lib/engineer");

describe("Engineer", ()=>{
    describe("Initialization", ()=>{
        it("should return an object containing a name, id, email and github property when called with the 'new' keyword and values supplies for 'name, id, email, github'", ()=>{
            const eng = new Engineer("ENG", "Ash", "1234", "bestevar@gmail.com", "Ashtavious");

            expect(eng.name).toBe("Ash");
            expect(eng.id).toBe("1234");
            expect(eng.email).toBe("bestevar@gmail.com");
            expect(eng.github).toBe("Ashtavious")

        });
    });
    
    describe("Engineer getName", ()=>{
        it("should return engineer name", ()=>{
            const engName = new Engineer("ENG", "Connor", "4321", "gerry@gerrymail.com", "Yugi").getName();
            expect(engName).toBe("Connor");
        });
    });
    describe("Engineer getId", ()=>{
        it("should return engineer id", ()=>{
            const engId = new Engineer("ENG", "Connor", "12132", "gerry@gerrymail.com", "Yugi").getId();
            expect(engId).toBe("12132");
        });
    });
    describe("Engineer getEmail", ()=>{
        it("should return engineer's email", ()=>{
            const engEmail = new Engineer("ENG", "Connor", "12132", "gerry!@gerrymail.com", "Yugi").getEmail();
            expect(engEmail).toBe("gerry!@gerrymail.com");
        });
    });
    describe("Engineer getGithub", ()=>{
        it("should return engineer's github account", ()=>{
            const engGithub = new Engineer("ENG", "Connor", "12132", "gerry!@gerrymail.com", "Yugi").getGithub();
            expect(engGithub).toBe("Yugi");
        });
    });
    describe("Engineer getRole", ()=>{
        it("should return 'Engineer'", ()=>{
            const engRole = new Engineer("ENG", "Connor", "12132", "gerry!@gerrymail.com", "Yugi").getRole();
            expect(engRole).toBe("Engineer");
        });
    });
});