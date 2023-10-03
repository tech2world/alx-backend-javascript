/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const students = getListStudents;
  const updatedStudents = students.map((student) => {
    if (student.location === city) {
      const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
      if (matchingGrade) {
        student.grade = matchingGrade.grade;
      } else {
        student.grade = 'N/A';
      }
    }
    return student;
  });

  return updatedStudents;
}
