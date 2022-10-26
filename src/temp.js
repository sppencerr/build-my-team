const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

// build questions for manager
const questionsMngr = [
  {
    type: "input",
    message: "Team Manager Name: ",
    name: "name",
  },
  {
    type: "input",
    message: "Employee ID: ",
    name: "id",
  },
  {
    type: "input",
    message: "Employee Email: ",
    name: "email",
  },
  {
    type: "input",
    message: "Manager Office Number: ",
    name: "office",
  },
];

// build questions for engineer
const questionsEng = [
  {
    type: "input",
    message: "engineer Name: ",
    name: "name",
  },
  {
    type: "input",
    message: "Employee ID: ",
    name: "id",
  },
  {
    type: "input",
    message: "Employee Email: ",
    name: "email",
  },
  {
    type: "input",
    message: "Github Username: ",
    name: "gituser",
  },
];

// build questions for Intern
const questionsInt = [
  {
    type: "input",
    message: "Intern Name: ",
    name: "name",
  },
  {
    type: "input",
    message: "Employee ID: ",
    name: "id",
  },
  {
    type: "input",
    message: "Employee Email: ",
    name: "email",
  },
  {
    type: "input",
    message: "Intern School: ",
    name: "school",
  },
];

// questions to continue or not
const questionsCont = {
  type: "list",
  name: "nextemp",
  message: "Add another employee?",
  choices: [
    { value: "eng", name: "engineer" },
    { value: "Int", name: "Intern" },
    { value: "done", name: "Done" },
  ],
};

questionsMngr.push(questionsCont);
questionseng.push(questionsCont);
questionsInt.push(questionsCont);

function Employee(type, name, id, email) {
  this.type = type;
  this.name = name;
  this.id = id;
  this.email = email;
}

const getAnswers = async (employeeType, employees = []) => {
  let questions = [];
  let answers = [];
  switch (employeeType) {
    case "Mngr":
      questions = questionsMngr;
      break;
    case "Eng":
      questions = questionseng;
      break;
    case "Int":
      questions = questionsInt;
      break;
    default:
      done = true;
      break;
  }
  answers = await inquirer.prompt(questions);

  answers.type = employeeType;

  employees.push(answers);

  if (answers.nextemp !== "done") {
    return getAnswers(answers.nextemp, employees);
  } else {
    return employees;
  }
};

const htmlGenerator = async (data) => {
  let employees = [];
  for (let i = 0; i < data.length; i++) {
    employees[i] = new Employee(
      data[i].type,
      data[i].name,
      data[i].id,
      data[i].email
    );
    switch (data[i].type) {
      case "Mngr":
        employees[i] = new Manager(
          data[i].type,
          data[i].name,
          data[i].id,
          data[i].email,
          data[i].office
        );
        break;
      case "eng":
        employees[i] = new engineer(
          data[i].type,
          data[i].name,
          data[i].id,
          data[i].email,
          data[i].gituser
        );
        break;
      case "Int":
        employees[i] = new Intern(
          data[i].type,
          data[i].name,
          data[i].id,
          data[i].email,
          data[i].school
        );
        break;
      default:
        break;
    }
  }

  function getCardHeader(type, name) {
    let returnString = "";
    switch (type) {
      case "Mngr":
        returnString = `<img class="" src="img/coffe.png" style="max-height:30px;" alt="sippin"/> <span class="font-weight-bold h5" >Manager</span>`;
        break;
      case "eng":
        returnString = `<img class="" src="img/glasses.png" style="max-height:30px; " alt="bozo"/> <span class="font-weight-bold h5" >Engineer</span>`;
        break;
      case "Int":
        returnString = `<img class="" src="img/student.png" style="max-height:30px; " alt="fresh student"/> <span class="font-weight-bold h5" >Intern</span>`;
        break;
    }
    returnString += `<h4 class="card-title">${name}</h4>`;
    return returnString;
  }

  function getCardFooter(type, obj) {
    let returnString = "";
    switch (type) {
      case "Mngr":
        returnString = `<p class="card-text">Office: <span class="font-weight-bold">${obj.office}</span></p>`;
        break;
      case "eng":
        returnString = `<p class="card-text">Github: <span class="font-weight-bold"> <a href="https://github.com/${obj.github}" target="_blank">${obj.github}</a></span></p>`;
        break;
      case "Int":
        returnString = `<p class="card-text">School: <span class="font-weight-bold">${obj.school}</span></p>`;
        break;
    }
    return returnString;
  }

  let htmlString = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    </head>
    <body>
        <main class="d-flex flex-wrap">
        <section class="jumbotron d-flex flex-column col-12 text-center" style="color:#080808; background-image: linear-gradient(to right, rgb(252, 3, 140),rgb(245, 198, 224) );">
            <h1 class="title">Team Members</h1>
        </section>
        <section class="mx-auto row" style="">`;

  for (let i = 0; i < employees.length; i++) {
    htmlString += `<div class="card col-lg-2 col-md-6 col-sm-6 m-2 p-0" style="min-width:300px;">
        <div class="card-body border border-info">
            <div class="mb-2">
                ${getCardHeader(employees[i].type, employees[i].name)}
            </div>
            <p class="card-text">Employee Id: <span class="font-weight-bold"> ${
              employees[i].id
            }</span></p>
            <p class="card-text">Email: <span class="font-weight-bold"> <a href="mailto:${
              employees[i].email
            }" target="_blank">${employees[i].email}</a></span></p>
            ${getCardFooter(employees[i].type, employees[i])}
        </div>
    </div>`;
  }

  return htmlString;
};

//store string, generate document
const writeFile = async (data, filename) => {
  let fileDir = "dist/";
  fileName = fileDir + filename;

  fs.appendFile(fileName, data, (err) =>
    err
      ? console.error(err)
      : console.log(
          "\x0A\x0A The team profile @ builtTeam.html is ready go to /dist to check..\x0A\x0A"
        )
  );

  return true;
};

module.exports = {
  htmlGenerator,
  writeFile,
  getAnswers,
};
