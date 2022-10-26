const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
    this.github = gitHub;
    this.role = "Engineer";
  }
  getGithub() {
    return this.gitHub;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Engineer;
