class Employee {
  constructor(type, name, id, email) {
    this.type = type;
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }

  getName() {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
}
module.exports = Employee;
