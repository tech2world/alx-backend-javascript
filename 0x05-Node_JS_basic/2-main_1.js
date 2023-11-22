const countStudents = require('./2-read_file');

try {
    countStudents("database.csv");
} catch (error) {
    console.error(error.message);
}
