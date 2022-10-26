const Engineer = require("../lib/engineer");

describe("Engineer", ()=>{
    describe("Initialization", ()=>{
        it("should return an object containing a name, id, email and github property when called with the 'new' keyword also should return 'name, id, email, github'", ()=>{
            const eng = new Engineer("ENG", "kessia", "1234", "kessia@email.com", "kessington");

            expect(eng.name).toBe("kessia");
            expect(eng.id).toBe("1234");
            expect(eng.email).toBe("kessia@email.com");
            expect(eng.github).toBe("kessington")

        });
    });
    
    describe("Engineer getName", ()=>{
        it("should return engineer name", ()=>{
            const engName = new Engineer("ENG", "adam", "4321", "adam@atom.com", "microatom").getName();
            expect(engName).toBe("adam");
        });
    });
    describe("Engineer getId", ()=>{
        it("should return engineer id", ()=>{
            const engId = new Engineer("ENG", "adam", "12132", "adam@atom.com", "microatom").getId();
            expect(engId).toBe("12132");
        });
    });
    describe("Engineer getEmail", ()=>{
        it("should return engineer's email", ()=>{
            const engEmail = new Engineer("ENG", "adam", "12132", "adam!@atom.com", "microatom").getEmail();
            expect(engEmail).toBe("adam!@atom.com");
        });
    });
    describe("Engineer getGithub", ()=>{
        it("should return engineer's github account", ()=>{
            const engGithub = new Engineer("ENG", "adam", "12132", "adam!@atom.com", "microatom").getGithub();
            expect(engGithub).toBe("microatom");
        });
    });
    describe("Engineer getRole", ()=>{
        it("should return 'Engineer'", ()=>{
            const engRole = new Engineer("ENG", "adam", "12132", "adam!@atom.com", "microatom").getRole();
            expect(engRole).toBe("Engineer");
        });
    });
});