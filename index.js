const inquirer = require('inquirer');

const fs = require('fs');

const Intern = require('./lib/intern');

const Manager = require('./lib/manager');

const Engineer = require('./lib/engineer');

const Questions = require('./lib/questions');

const members = [];


const start = () => {
    role();
};

const role = () => {
    inquirer.prompt(Questions).then(answer => {
        let member;
        if (answer.role === 'Intern'){
            member = new Intern(answer.name, answer.id, answer.email, answer.school);
        } else if (answer.role === 'Engineer'){
            member = new Engineer(answer.name, answer.id, answer.email, answer.gitHub);
        } else if (answer.role === 'Manager'){
            member = new Manager(answer.name, answer.id, answer.email, answer.office);
        } 
        members.push(member);
        if (answer.choose === 'Create a profile.'){
            role();
        } 
        else if (answer.choose === 'View my team.'){
            console.log(members);
            let mainHtml = fs.readFileSync('./templates/main.html', 'utf8');
            card = '';
            
            for (let i = 0; i < members.length; i++){
                let employee = members[i];
                card += generateHtml(employee);
            };
                
            mainHtml = mainHtml.replaceAll('{{ team }}', card);
    
            fs.writeFileSync('./output/team.html', mainHtml); 
        }
    });        
};

generateHtml = (employee) => {
 if (employee.getRole() === 'Engineer'){
    let engineerHtml = fs.readFileSync('./templates/engineer.html', 'utf8');
    engineerHtml = engineerHtml.replaceAll('{{ name }}', employee.getName());
    engineerHtml = engineerHtml.replaceAll('{{ role }}', employee.getRole());
    engineerHtml = engineerHtml.replaceAll('{{ id }}', employee.getId());
    engineerHtml = engineerHtml.replaceAll('{{ email }}', employee.getEmail());
    engineerHtml = engineerHtml.replaceAll('{{ github }}', employee.getGithub());
    return engineerHtml;
    } else if (employee.getRole() === 'Intern') {
    let internHtml = fs.readFileSync('./templates/intern.html', 'utf8');
    internHtml = internHtml.replaceAll('{{ name }}', employee.getName());
    internHtml = internHtml.replaceAll('{{ role }}', employee.getRole());
    internHtml = internHtml.replaceAll('{{ id }}', employee.getId());
    internHtml = internHtml.replaceAll('{{ email }}', employee.getEmail());
    internHtml = internHtml.replaceAll('{{ school }}', employee.getSchool());
    return internHtml;
    } else if (employee.getRole() === 'Manager'){
    let managerHtml = fs.readFileSync('./templates/manager.html', 'utf8');
    managerHtml = managerHtml.replaceAll('{{ name }}', employee.getName());
    managerHtml = managerHtml.replaceAll('{{ role }}', employee.getRole());
    managerHtml = managerHtml.replaceAll('{{ id }}', employee.getId());
    managerHtml = managerHtml.replaceAll('{{ email }}', employee.getEmail());
    managerHtml = managerHtml.replaceAll('{{ officeNumber }}', employee.getOffice());
    return managerHtml;
    };
};

start();