type Grades = (1|2|3|4|5|6|"A"|"B"|"C"|"D"|"E"|"F"|undefined)[];
type Student = {firstName: string, lastName: string, age: number, certificate: Grades};

const student1: Student = { firstName: 'John', lastName: 'Doe', age: 18, certificate: ["A",2,1,undefined,5,"F"] };
const student2: Student = { firstName: 'Jane', lastName: 'Doe', age: 17, certificate: [1,undefined,6] };
const student3: Student = { firstName: 'Max', lastName: 'Mustermann', age: 19, certificate: [1,2,3,4,5] };

const allStudents: Student[] = [student1, student2, student3];

function printStudent(student: Student): void {
    console.log(student.firstName + ' ' + student.lastName + '  (' + student.age + ')');
    console.log("=".repeat(30));
    console.log("Noten:");
    console.log(student.certificate.map(grade => grade || '*').join(', '));

}

function printAllStudents(students: Student[]): void {
    console.log("All Students:");
    students.forEach(student => printStudent(student));
}

printAllStudents(allStudents);