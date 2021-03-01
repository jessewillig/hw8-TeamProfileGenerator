// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name,eID,email){
        this.name = name;
        this.eID = eID;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.eID;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;