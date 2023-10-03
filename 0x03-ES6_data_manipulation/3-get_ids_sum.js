export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((sum, obj) => sum + obj.id, 0);
}
