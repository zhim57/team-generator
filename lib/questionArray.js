const questionsArray = [
    {
        type: "list",
        message: "Please choose your position on the team.",
        choices: ["Manager", "Engineer", "Intern"],
        default: 0,
        name: "employeePosition"
    },
    {
        type: "input",
        message: "Please enter your name.",
        name: "employeeName",
        validate: employeeName => {
            let alphaExp = /[a-zA-Z\d\s'-]/g;
            if (!employeeName.match(alphaExp)) {
                return "Please check ";
            } else {
                return true

            }
        }
    },

    {
        type: "input",
        message: "Enter your email address.",
        name: "email",
        validate: email => {
            let valEmail = /[a-zA-Z\d@.]/g;
            if (!email.match(valEmail)) {
                return "Please enter a valid e-mail";
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        message: "Please input your github username.",
        name: "github",
        validate: github => {
            let valGit = /[a-zA-Z\d\s'-]/gi;
            if (!github.match(valGit)) {
                return "Use alphanumeric characters , digits or hyphens.Max length <39";
            } else {
                return true;
            }
        },
        when: function (response) { return response.employeePosition === "Engineer" }

    },
    {
        type: "input",
        message: "Please input your office number.",
        name: "officeNumber",
        validate: officeNumber => {
            let alphaExp = /^[0-9]/;
            if (!officeNumber.match(alphaExp)) {
                return "It should only have numbers";
            } else {
                return true;
            }
        },
        when: function (response) { return response.employeePosition === "Manager" }
    },
    {
        type: "input",
        message: "Please input the name of your school.",
        name: "school",
        validate: school => {
            if (school.length < 2) {
                return "Name is too short";
            }
            else {
                return true;
            }
        },
        when: function (response) { return response.employeePosition === "Intern" }
    },
    {
        type: "confirm",
        message: " Would you like to enter another Employee?",
        name: "more",
    },

];
module.exports = questionsArray;