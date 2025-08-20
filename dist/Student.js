"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person = require("./Person");
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayAllInfo() {
        console.log("Name: " + this.name + "\n");
        console.log("Age: " + this.age + "\n");
        console.log("Grade: " + this.grade + "\n");
    }
}
module.exports = Student;
