// CODE here for your Lambda Classes
class Person{
    constructor(personAttrs){
    this.age = personAttrs.age;
    this.location = personAttrs.location;
    this.name = personAttrs.name;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location} .`;
    }
  }

  class Instructor extends Person {
      super(instructorAttrs){
          this.specialty = instructorAttrs.specialty;
          this.favLanguage = instructorAttrs.favLanguage;
          this.catchPhrase = instructorAttrs.catchPhrase;
      }
      demo(subject) {
          return `Today we are learning about ${subject}`
      }
    
      grade(student, subject) {
          return `${student.name} receives a perfect score on ${subject}`
      }
  }

  class Student extends Person {
      constructor(studentsAttrs) {
          super(studentsAttrs);
          this.previousBackground = studentsAttrs.previousBackground;
          this.className = studentsAttrs.className;
          this.favSubjects = studentsAttrs.favSubjects;
      }

      listsSubjects() {
          this.favSubjects.map(item => console.log(item));
      }

      
  }