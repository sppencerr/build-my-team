const Questions = [
    {
        type: 'list',
        name: 'role',
        message: 'What is the employees postition?',
        choices: ["Intern", "Engineer", "Manager"],
        validate: inputRole => {
            if (inputRole) {
                return true;
            } else {
                console.log('Please choose a position.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the employees name',
        validate: inputName => {
            if (inputName) {
                return true;
            } else {
                console.log('Sorry try again, please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is employees id number?',
        validate: inputIDNumber => {
            if (inputIDNumber) {
                return true;
            } else {
                console.log('That is not a valid id, please try again.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is employees email?',
        validate: inputEmail => {
            if (inputEmail) {
                return true;
            } else {
                console.log('Enter a valid email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter employees school name.',
        when: (userInput) => userInput.role === 'Intern',
        validate: inputSchool => {
            if (inputSchool) {
                return true;
            } else {
                console.log('Please enter a school name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is employees Github username?',
        when: (userInput) => userInput.role === 'Engineer',
        validate: inputgitHub => {
            if (inputgitHub) {
                return true;
            } else {
                console.log('Enter a valid github username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: 'Enter Managers office number.',
        when: (userInput) => userInput.role === 'Manager',
        validate: inputOffice => {
            if (inputOffice) {
                return true;
            } else {
                console.log('Error enter valid number.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'choose',
        message: 'What would you like to do?',
        choices: ["Create a profile.", "View my team."],
        validate: inputChoice => {
            if (inputChoice) {
                return true;
            } else {
                console.log('Please choose one of the choices above.');
                return false;
            }
        }
    }
];

module.exports = Questions; 