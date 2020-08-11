// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email,  officeNumber, github){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.github = github;
                
    }

    getRole(){
        return "Manager";
  
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    
    getGithub(){
        return this.github;
    }
}

module.exports = Manager;