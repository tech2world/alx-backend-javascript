namespace Subjects {
    // Add a new attribute to the Teacher interface
    export interface Teacher {
      experienceTeachingJava?: number;
    }
  
    export class Java extends Subject {
      getRequirements() {
        return "Here is the list of requirements for Java";
      }
  
      getAvailableTeacher() {
        if (this.teacher && this.teacher.experienceTeachingJava) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return "No available teacher";
        }
      }
    }
  }
  