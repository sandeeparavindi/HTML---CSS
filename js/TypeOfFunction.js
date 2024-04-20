// 1. Named Fuction

function addNumber(num1, num2) {
    return num1, num2
}

console.log(addNumber(10,20))
console.log('===================')

// 2. Anonymous function

let mulitipleNumbers = function(num1, num2) {
    return num1, num2
}

console.log(mulitipleNumbers(10,20));
console.log('===================')

// 3. Arrow functions

let subNumbers = (num1, num2) => num1 - num2 // using only one line

// let subNumbers = (num1, num2) => {
// console.log('2 lines using {}')
//     return num1 - num2
// }

console.log(subNumbers(20,10))
console.log('===================')

// 4. Constructor function

function Student(name, age, email) {
    this.name = name
    this.age = age
    this.email = email
}

// javascript wla muliple constructors na

let student1 = new Student("kamal",25,"kamal@gmail.com");
console.log(student1);
console.log('===================')

// 5. CallBack Function

function myFunction(number) {
    // console.log(number)
   // number() // function ekk pass kraddi me widiyta function eka call kranna one
   console.log(typeof number)
   if (typeof number === 'function') {
    number()
   } else if (typeof number ==='object') {
    console.log(number)
   } 
}

let person = {
    name :'Amal',
    age : 40
} //object ekk litaral widiyata define kra

let numbersArray = [1,2,3]; //array ekk litaral widiyata define kra

function secondFunction() {
    console.log('second function')
}

myFunction(person)
myFunction(secondFunction) // function ek athulata function ekak pass kara. uda wge array ekk object ekk unth function eka athulata pass kranna puluwan
console.log('===================')

// 6. Recursive function

function names(n) {
    if (n === 0) {
        return 1
    }
    return n*(names(n-1))
}

console.log(names(5))