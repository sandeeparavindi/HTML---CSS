function addNumbers(num1, num2) {
    return num1+num2
}

//Arrow Functions

const addNumberArrow =(num1, num2) => {
    return num1+num2
}

const addNumberArrows =(num1, num2) => num1+num2

console.log(addNumbers(10,20));
console.log(addNumberArrow(10,20));
console.log(addNumberArrows(10,20));

//======================

//converting Named function to Arrow Function

const addNumber = (num1, num2) => num1 + num2
console.log(addNumber(10,20))

console.log('=====================')

//converting anony function to Arrow Function
let mulitipleNumbers = (num1, num2)=> num1, num2


console.log(mulitipleNumbers(10,20));
console.log('===================')

//converting contructor function to Arrow Function (constructor function not suitable to convert arrow function because this key word and new keyword is not support)
// let Student = (name, age, email) => {
//     this.name = name
//     this.age = age
//     this.email = email
// }

// let student1 = new Student("kamal",25,"kamal@gmail.com");
// console.log(student1);
// console.log('===================')

// let myFunction = (number) => number() 
let myFunction = number => number() // parameter 1 k withrak thinawa nn blacut dek ain krnn puluwan dekk hri parameter nththn hri blacut one aniwren.
  
let secondFunction = () => console.log('second function')

myFunction(secondFunction) 
console.log('===================')
