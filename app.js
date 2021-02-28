const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeList = [];
let HTML = "";
const managerQuestions = [
    {
        type: "input",
        message: "What is your name? ",
        name: "name"
    },
    {
        type: "input",
        message: "Employee Id? ",
        name: "eID"
    },
    {
        type: "input",
        message: "Email address? ",
        name: "email"
    },
    {
        type: "input",
        message: "Office Number? ",
        name: "oNum"
    }
];

const engineerQuestions = [
    {
        type: "input",
        message: "What is your name? ",
        name: "name"
    },
    {
        type: "input",
        message: "Employee Id? ",
        name: "eID"
    },
    {
        type: "input",
        message: "Email address? ",
        name: "email"
    },
    {
        type: "input",
        message: "GitHub Username? ",
        name: "github"
    }
];

const internQuestions = [
    {
        type: "input",
        message: "What is your name? ",
        name: "name"
    },
    {
        type: "input",
        message: "Employee Id? ",
        name: "eID"
    },
    {
        type: "input",
        message: "Email address? ",
        name: "email"
    },
    {
        type: "input",
        message: "Internee School? ",
        name: "school"
    }
];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const employeeInfo = () => {
    inquirer.prompt([
        {
            type: list,
            name: type,
            message: "Employee type?",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ]).then(selection => {
        switch (selection) {
            case "Manager":
                return managerQs();

            case "Engineer":
                return engineerQs();

            case "Intern":
                return internQs();

            default:
                return choices;
        }

        function managerQs () {
            inquirer.prompt(managerQuestions)
                .then(selection => {
                    const employee = new Manager(selection.name, selections.eID, selection.email, selection.oNum);
                    employeeList.push(employee);
                    addEmployee();
                })
        }

        function engineerQs () {
            inquirer.prompt(engineerQuestions)
                .then(selection => {
                    const employee = new Engineer(selection.name, selection.eID, selection.email, selection.github);
                    employeeList.push(employee);
                    addEmployee();
                })
        }

        function internQs () {
            inquirer.prompt(internQuestions)
                .then(selection => {
                    const employee = new Intern(selection.name, selection.eID, selection.email, selection.school);
                    employeeList.push(employee);
                    addEmployee();
                })
                .catch(err => console.log(err));
        }
    })
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

const addEmployee = () => {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Add more employees?",
            name: "addEmployee"
        }
    ]).then(response => {
        switch (response) {
            case addEmployee:
                console.log("Yes");
                return employeeInfo();
        
            default:
                HTML += render(employeeList);
                fs.writeFile(outputPath, HTML, err => console.log(err));
                console.log("Complete");
                return;
        }
    })
}

employeeInfo();

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
