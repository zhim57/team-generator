const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
 
const questionArray = require("./lib/questionArray");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var employees = [];

function inputEmployeeInfo() {
    let employeeData = {};
    inquirer.prompt(questionArray).then(response => {
        if (response.employeePosition === "Manager") {
            employeeData = new Manager(response.employeeName, employees.length + 1, response.email, response.officeNumber);
        } else if (response.employeePosition === "Engineer") {
            employeeData = new Engineer(response.employeeName, employees.length + 1, response.email, response.github);
        } else {
            employeeData = new Intern(response.employeeName, employees.length + 1, response.email, response.school);
        }
        employees.push(employeeData);
        if (response.more) {
            inputEmployeeInfo();
        } else {

            fs.writeFile(outputPath, render(employees), (err) => {
                if (err) return console.log(err);
                console.log(`team.html : ${outputPath}`);
            });
            return
        }
    });
};

inputEmployeeInfo();
