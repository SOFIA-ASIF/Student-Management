#! /usr/bin/env node
class Student {
    private static idCounter: number = 10000;
    private name: string;
    private id: number;
    private courses: string[];
    private balance: number;
  
    constructor(name: string) {
      this.name = name;
      this.id = Student.idCounter++;
      this.courses = [];
      this.balance = 0;
    }
  
    public enroll(course: string): void {
      this.courses.push(course);
      this.balance += 600;
    }
  
    public viewBalance(): number {
      return this.balance;
    }
  
    public payTuition(amount: number): void {
      this.balance -= amount;
    }
  
    public showStatus(): void {
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