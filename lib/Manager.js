// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name,eID,email,oNum) {
        super(name,eID,email);
        this.oNum = oNum;
    }
    getOfficeNumber() {
        return this.oNum;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;