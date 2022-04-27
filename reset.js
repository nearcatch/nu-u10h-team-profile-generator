const fs = require("fs");
const teamHtml = "./dist/team.html";

fs.unlink(teamHtml, (err) =>
  err ? console.error(err) : console.log(`Deleted ${teamHtml}`)
);
