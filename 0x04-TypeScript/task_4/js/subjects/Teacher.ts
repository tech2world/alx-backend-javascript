namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
    }
}

/*
Create a file Cpp.ts and make the following modifications in the same namespace.

Using declaration merging, add a new optional attribute experienceTeachingC (number) to the Teacher interface
Create a class Cpp extending from Subject
Write a method named getRequirements that will return a string Here is the list of requirements for Cpp
Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
If the teacher doesn’t have any experience in teaching C, then the method should return a string No available teacher
Create a file React.ts and write a React Class in the same namespace.

Add a new attribute experienceTeachingReact? (number) to the Teacher interface
In the class, write a method named getRequirements that will return a string Here is the list of requirements for React
Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
If the teacher doesn’t have any experience in teaching React, then the method should return a string No available teacher
Create a file Java.ts and write a Java Class in the same namespace.

Add a new attribute experienceTeachingJava? (number) to the Teacher interface
In the class, write a method named getRequirements that will return a string Here is the list of requirements for Java
Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
If the teacher doesn’t have any experience in teaching Java, then the method should return a string No available teacher
 */