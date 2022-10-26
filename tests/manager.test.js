const Manager = require("../lib/manager");

describe("Manager", ()=>{
    describe("Initialization", ()=>{
        it("should return an object containing a name, id, email and office num property when called with the 'new' keyword it should also return 'name, id, email, office number'", ()=>{
            const mgr = new Manager("MGR", "kessia", "1234", "kessia@email.com", "1");

            expect(mgr.name).toBe("kessia");
            expect(mgr.id).toBe("1234");
            expect(mgr.email).toBe("kessia@email.com");
            expect(mgr.office).toBe("1");

        });
    });
    
    describe("Manager getName", ()=>{
        it("should return Manager name", ()=>{
            const mgrName = new Manager("MGR", "kessManager", "320413", "mnger@coldmail.com", "1").getName();
            expect(mgrName).toBe("kessManager");
        });
    });
    describe("Manager getId", ()=>{
        it("should return manager id", ()=>{
            const mgrId = new Manager("MGR", "kessManager", "320413", "mnger@coldmail.com", "1").getId();
            expect(mgrId).toBe("320413");
        });
    });
    describe("Manager getEmail", ()=>{
        it("should return an managers's email", ()=>{
            const mgrEmail = new Manager("MGR", "kessManager", "320413", "mnger@coldmail.com", "1").getEmail();
            expect(mgrEmail).toBe("mnger@coldmaill.com");
        });
    });
    describe("Manager getOffice", ()=>{
        it("should return an managers's office number", ()=>{
            const mgrOffice = new Manager("MGR", "kessManager", "320413", "mnger@coldmail.com", "1").getOffice();
            expect(mgrOffice).toBe("1");
        });
    });
    describe("Manager getRole", ()=>{
        it("should return 'Manager'", ()=>{
            const mgrRole = new Manager("MGR", "kessManager", "320413", "mnger@coldmail.com", "1").getRole();
            expect(mgrRole).toBe("Manager");
        });
    });
});