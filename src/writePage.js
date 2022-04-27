const fs = require("fs");

// function for writing page, taking in employees array from index.js
function writePage(employees) {
  let cards = [];
  let rawCards = [];
  // iterate over employees and write a card for each by calling writeCard
  for (employee of employees) {
    let role = employee.getRole();
    rawCards.push(writeCard(employee, role));
  }
  // flatten the rawCards array into a string
  cards = rawCards.join("");
  // page template with string interpolated variables
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
  
  // write the page and log a message
  fs.writeFile("./dist/team.html", page, (err) =>
    err
      ? console.error(err)
      : console.log("Writing your team page to ./dist/team.html")
  );
}

// card writing function
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

module.exports = writePage;
