//Inquirer import
const inquirer = require("inquirer");
//File system manager import
const fs = require("fs");
//Import classes from shapes.js
const { Triangle, Square, Circle } = require("./lib/shapes.js");

//Function writes to an SVG file
function writeToFile(fileName, answers) {
  let svgString = "";
  svgString = `<svg version="1.1" baseProfile="full" width="300" height="300" xmlns="http://www.w3.org/2000/svg">`;
  svgString += "<g>";
  svgString += `${answers.shape}`;
  //check user inputs for shape and color
  let shapeChoice;
  if (answers.shape === "circle") {
    shapeChoice = new Circle();
    svg += `< circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundcolor}"/>`;
  } else if (answers.shape === "square") {
    shapeChoice = new Square();
    svg += `<rect x="73" y="40" width="154" height="154" fill="${answers.shapeBackgroundcolor}"/>`;
  } else {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150,40 73,250 227,250" fill="${answers.shapeBackgroundcolor}"/>`;
  }
  //text alignment
  svgString += `<text x="150" y="150" font-size="35" fill="${answers.textColor}" text-anchor="middle">${answers.text}</text>`;
  svgString += "</g>";
  svgString += "</svg>";

  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated SVG file");
  });
}

//Prompts for the user to choose shape and color
function promptUser() {
  inquirer.prompt([
    {
      type: "input",
      Massage:
        "What text would you like inside your logo?(Please enter up to three characters)",
      name: "text",
    },

    {
      type: "input",
      message:
        "What color text would you like you logo to be?(Color keyword or a hexadecimal number)",
      name: "textColor",
    },

    {
      type: "list",
      massage: "What shape would you like your logo to be?",
      choices: ["circle", "square", "triangle"],
      name: "shape",
    },

    {
      type: "input",
      massage:
        "what color would you the background to be?(Color keyword or a hexadecimal number)",
      name: "shapeBackgroundColor",
    },
  ]);
}
