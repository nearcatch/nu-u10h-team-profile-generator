const fs = require("fs");
// const Manager = require("../lib/Manager");
// const Engineer = require("../lib/Engineer");
// const Intern = require("../lib/Intern");

// let employees = [
//   new Manager("Bleh", 3, "manager@gmai.com", "55555-33"),
//   new Engineer("ENGBLEH", 21, "eng@gmai.com", "englbeh"),
//   new Intern("INTBLEH", 13, "int@gmai.com", "Hard Knocks"),
// ];
function writePage(cards) {
  let page = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="styles.css" />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"
        defer
      ></script>
    </head>
    <!DOCTYPE html>
    <body>
      <nav id="header" class="navbar bg-danger">
        <div class="container-fluid justify-content-center text-white">
          <div class="navbar-brand p-4">
            <h2>My Team</h2>
          </div>
        </div>
      </nav>
      <main class="row justify-content-center my-5 mx-0">
        ${cards}
      </main>
    </body>
  </html>`;
  fs.writeFile("./dist/team.html", page, (err) => console.error(err));
}

function writeCard(employee, role) {
  const { name, id, email, office, github, school } = employee;
  let unique = "";
  if (office) {
    unique = `Office Number: ${office}`;
  } else if (github) {
    unique = `Github: <a href="https://github.com/${github}">${github}</a>`;
  } else if (school) {
    unique = `School: ${school}`;
  }
  return `<div id="card" class="card col-6 col-md-3 shadow-sm p-0 m-2 rounded">
  <div class="card-header bg-primary text-white">
    <h4 class="p-1">${name}</h4>
    <h5 class="p-1">${employee.getRole()}</h5>
  </div>
  <ul class="list-group p-4">
    <li class="list-group-item">ID: ${id}</li>
    <li class="list-group-item">Email: <a href="https://github.com/${email}">${email}</a></li>
    <li class="list-group-item">${unique}</li>
  </ul>
</div>`;
}

function writeHtml() {
  let cards = [];
  let rawCards = [];
  for (employee of employees) {
    let role = employee.getRole();
    rawCards.push(writeCard(employee, role));
    cards = rawCards.join("");
  }
  writePage(cards);
}

module.exports = writeHtml;
