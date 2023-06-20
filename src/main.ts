type Grades = (1|2|3|4|5|6|"A"|"B"|"C"|"D"|"E"|"F"|undefined)[];
type Subject = {name: string, grade: Grades};
type Student = {firstName: string, lastName: string, age: number, certificate: Subject[]};

const student1: Student = { firstName: 'John', lastName: 'Doe', age: 18, certificate: [{name: "Sport", grade: [2,"A",5]},{name:"Kunst", grade:[3,2,4]}] };
const student2: Student = { firstName: 'Jane', lastName: 'Doe', age: 17, certificate: [{name: "Mathe", grade: [2,"A",5]},{name:"Deutsch", grade:[3,2,4]}] };
const student3: Student = { firstName: 'Max', lastName: 'Mustermann', age: 19, certificate: [{name: "Englisch", grade: [2,"A",5]},{name:"Java", grade:[3,2,4]}] };

const allStudents: Student[] = [student1, student2, student3];

function printStudent(student: Student): void {
    const consoleOutput = student.firstName + ' ' + student.lastName + '  (' + student.age + ')';
    console.log(consoleOutput);
    console.log("=".repeat(consoleOutput.length));
    console.log("Noten:");
    console.log(student.certificate.map(subject => subject.name + ": "
        + subject.grade.map(grade => grade || '*').join(' , ')).join('\n'));

}

function printAllStudents(students: Student[]): void {
    console.log("All Students:");
    students.forEach(student => printStudent(student));
}

printAllStudents(allStudents);