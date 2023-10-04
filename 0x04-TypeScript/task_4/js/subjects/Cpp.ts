namespace Subjects {
    // Declaration merging to add a new attribute
    export interface Teacher {
      experienceTeachingC?: number;
    }
  
    export class Cpp extends Subject {
      getRequirements() {
        return "Here is the list of requirements for Cpp";
      }
  
      getAvailableTeacher() {
        if (this.teacher && this.teacher.experienceTeachingC) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return "No available teacher";
        }
      }
    }
  }
  