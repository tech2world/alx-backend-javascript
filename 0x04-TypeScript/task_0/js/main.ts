export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Abdulazeez",
    lastName: "Ibrahim",
    age: 27,
    location: "Lagos"
}

const student2: Student = {
    firstName: "tech",
    lastName: "2world",
    age: 30,
    location: "Europe",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((student) => {
    const row = table.insertRow();
    const fnCell = row.insertCell(0);
    const locCell = row.insertCell(1);

    fnCell.innerHTML = student.firstName;
    locCell.innerHTML = student.location;
})
