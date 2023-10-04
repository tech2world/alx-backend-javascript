namespace Subjects {
    // Add a new attribute to the Teacher interface
    export interface Teacher {
      experienceTeachingReact?: number;
    }
  
    export class React extends Subject {
      getRequirements() {
        return "Here is the list of requirements for React";
      }
  
      getAvailableTeacher() {
        if (this.teacher && this.teacher.experienceTeachingReact) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return "No available teacher";
        }
      }
    }
  }
  