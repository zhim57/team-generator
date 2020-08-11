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
            let alphaExp = /[ _.\w - ']/g;
            let match1 =employeeName.match(alphaExp);
           let match =match1.join('');
            // if (!employeeName.match(alphaExp)) {
                if (employeeName != match){
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
            let valEmail = /[@ _.\w -]/gi;
            let match1 =email.match(valEmail);
            let match =match1.join('');
             // if (!employeeName.match(alphaExp)) {
                 if (email != match){
            // if (!email.match(valEmail)) {
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
            let valGit = /[ .\w - ]/gi;
            let match1 =github.match(valGit);
            let match =match1.join('');
            // if (!github.match(valGit)) {
                if (github != match){
                return "Use alphanumeric characters , digits or hyphens.Max length <39";
            } else {
                return true ;
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