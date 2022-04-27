const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const writePage = require("./src/writePage");

let employees = [];

buildTeam();

function buildTeam() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
      },
      {
        type: "input",
        name: "office",
        message: "What is the manager's office number?",
      },
      {
        type: "confirm",
        name: "add",
        message: "Are you adding another team member?",
        default: false,
      },
    ])
    .then(({ name, id, email, office, add }) => {
      let newEmployee = new Manager(name, id, email, office);
      employees.push(newEmployee);
      if (add) {
        addMember();
      } else {
        writePage(employees);
      }
    });
}

function addMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which team member would you like to add?",
        name: "role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the employee's github?",
        when: (input) => input.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "What is the employee's school?",
        when: (input) => input.role === "Intern",
      },
      {
        type: "confirm",
        name: "add",
        message: "Are you adding another team member?",
        default: false,
      },
    ])
    .then(({ role, name, id, email, github, school, add }) => {
      if (role === "Engineer") {
        employees.push(new Engineer(name, id, email, github));
      } else {
        employees.push(new Intern(name, id, email, school));
      }
      if (add) {
        addMember();
      } else {
        writePage(employees);
      }
    });
}
