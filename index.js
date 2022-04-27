const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let employees = [];
// buildTeam().then((answers) => {
//   fs.writeFile("./generated.md", `${buildReadme(answers)}`, (err) =>
//     err ? console.error(err) : console.log("Success!")
//   );
// });
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
      employees.push(new Manager(name, id, email, office));
      if (add) {
        addMember();
      } else {
        console.log(employees);
        console.log("Your team page is in ./dist")
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
        console.log(employees);
        console.log("Your team page is in ./dist")
      }
    });
}
