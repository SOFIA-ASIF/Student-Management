#! /usr/bin/env node
class Student {
    static idCounter = 10000;
    name;
    id;
    courses;
    balance;
    constructor(name) {
        this.name = name;
        this.id = Student.idCounter++;
        this.courses = [];
        this.balance = 0;
    }
    enroll(course) {
        this.courses.push(course);
        this.balance += 600;
    }
    viewBalance() {
        return this.balance;
    }
    payTuition(amount) {
        this.balance -= amount;
    }
    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Courses Enrolled: ${this.courses.join(", ")}`);
        console.log(`Balance: ${this.balance}`);
    }
}
// Example usage
const student = new Student("John Doe");
student.enroll("Math 101");
student.enroll("History 202");
console.log(student.viewBalance());
student.payTuition(600);
student.showStatus();
export {};
