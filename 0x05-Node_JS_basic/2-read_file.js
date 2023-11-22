const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        const lines = data.split('\n').map(line => line.trim()).filter(Boolean);

        const students = lines.map((line) => {
            const [firstname, lastname, age, field] = line.split(',');
            return { firstname, lastname, age, field };
        });

        const studentCount = students.length;

        console.log(`Number of students: ${studentCount}`);

        const fields = [...new Set(students.map((student) => student.field))];

        fields.forEach((field) => {
            const fieldStudents = students.filter((student) => student.field === field);
            const fieldStudentCount = fieldStudents.length;

            if (fieldStudentCount > 0) {
                const fieldStudentNames = fieldStudents.map((student) => student.firstname).join(', ');
                console.log(`Number of students in ${field}: ${fieldStudentCount}. List: ${fieldStudentNames}`);
            }
        });

    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
