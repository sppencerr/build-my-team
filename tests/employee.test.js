const Employee = require("../lib/employee");

describe("Employee", ()=>{
    describe("Initialization", ()=>{
        it("should return an object containing a name, id and email when called with the 'new' keyword it should also return a 'name, id and email'", ()=>{
            const emp = new Employee("EMP","kou", "1234", "kou@gmail.com");

            expect(emp.name).toBe("kou");
            expect(emp.id).toBe("1234");
            expect(emp.email).toBe("kou@gmail.com")

        });
    });
    
    describe("Employee getName", ()=>{
        it("should return employee name", ()=>{
            const empName = new Employee("EMP","futuba", "4321", "futuba@gmail.com").getName();
            expect(empName).toBe("futuba");
        });
    });
    describe("Employee getId", ()=>{
        it("should return employee id", ()=>{
            const empId = new Employee("EMP","futuba", "12132", "futuba@gmail.com").getId();
            expect(empId).toBe("12132");
        });
    });
    describe("Employee getEmail", ()=>{
        it("should return employee email", ()=>{
            const empEmail = new Employee("EMP","futuba", "12132", "futuba!@gmail.com").getEmail();
            expect(empEmail).toBe("futuba!@gmail.com");
        });
    });
    describe("Employee getRole", ()=>{
        it("should return 'Employee role", ()=>{
            const empRole = new Employee("EMP","futuba", "12132", "futuba!@gmail.com").getRole();
            expect(empRole).toBe("Employee");
        });
    });
});