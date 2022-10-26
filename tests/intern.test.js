const Intern = require("../lib/intern");

describe("Intern", ()=>{
    describe("Initialization", ()=>{
        it("should return an object containing a name, id, email and school property when called with the 'new' keyword and values supplies for 'name, id, email, school'", ()=>{
            const intern = new Intern("INT", "kou", "1234", "kou@gmail.com", "UofT");

            expect(intern.name).toBe("kou");
            expect(intern.id).toBe("1234");
            expect(intern.email).toBe("kou@gmail.com");
            expect(intern.school).toBe("UofT");

        });
    });
    
    describe("Intern getName", ()=>{
        it("should return Intern name", ()=>{
            const intName = new Intern("INT", "Lois", "4321", "michelle@gmail.com", "UofT").getName();
            expect(intName).toBe("Lois");
        });
    });
    describe("Intern getId", ()=>{
        it("should return intern id", ()=>{
            const intId = new Intern("INT", "michelle", "12132", "michelle@gmail.com", "UofT").getId();
            expect(intId).toBe("12132");
        });
    });
    describe("Intern getEmail", ()=>{
        it("should return an intern's email", ()=>{
            const intEmail = new Intern("INT", "michelle", "12132", "michelle!@gmail.com", "UofT").getEmail();
            expect(intEmail).toBe("michelle!@gmail.com");
        });
    });
    describe("Intern getRole", ()=>{
        it("should return 'Intern'", ()=>{
            const intRole = new Intern("INT", "michelle", "12132", "michelle!@gmail.com", "UofT").getRole();
            expect(intRole).toBe("Intern");
        });
    });
});