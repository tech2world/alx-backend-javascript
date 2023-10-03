export default function getStudentsByLocation(list, city) {
  const filterByLocation = (obj) => obj.location === city;
  return list.filter(filterByLocation);
}
