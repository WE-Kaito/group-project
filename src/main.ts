type Grades = (1|2|3|4|5|6|"A"|"B"|"C"|"D"|"E"|"F"|undefined)[];
type Subject = {name: string, grade: Grades};
type Student = {firstName: string, lastName: string, age: number, certificate: Subject[], id:string};

const student1: Student = { firstName: 'John', lastName: 'Doe', age: 18, certificate: [{name: "Sport", grade: [2,"A",5]},{name:"Kunst", grade:[3,2,4]}], id:"123456" };
const student2: Student = { firstName: 'Jane', lastName: 'Doe', age: 17, certificate: [{name: "Mathe", grade: [2,"A",5]},{name:"Deutsch", grade:[3,2,4]}], id:"654321" };
const student3: Student = { firstName: 'Max', lastName: 'Mustermann', age: 19, certificate: [{name: "Englisch", grade: [2,"A",5]},{name:"Java", grade:[3,2,4]}], id:"987654" };

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

function updateStudent(student: Student[], id: string, firstName: string, lastName: string){
    student.forEach(student => {
        if(student.id === id){
            student.firstName = firstName;
            student.lastName = lastName;
        }
    })
    console.log(allStudents);
}

function newStudentArray(students: Student[], id: string, firstName: string, lastName: string): Student[] {
    const newStudents = students.map(student => {
        if(student.id === id){
            return {
                ...student,
                firstName: firstName,
                lastName: lastName
            };
        }
        return { ...student };
    })
    return newStudents;
}


console.log(newStudentArray(allStudents, "987654", "Fritz", "Maier"));
console.log(allStudents);

