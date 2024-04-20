let student = {};
console.log("Type of student : " ,typeof student);
console.log("Student : ", student);

student={
    fristName: 'Kamal',
    lastName: 'Perera',
    phone: '0774514145',
    age: 21
}
console.log("Student : ", student);

console.log("Student phone : ", student.phone);
console.log("Student phone : ", student['phone']);

// using dot notation
student.age = 20;
console.log(student.age);
console.log(student);