// 6 types

// 1. string
let fristName = "Sanu";
console.log("Type of frist name : " +typeof fristName);

//2. number
let age = 10;
let distance = 3.805;
console.log("Type of age : " +typeof age);
console.log("Type of distance : " +typeof distance);

// 3. boolean
let isAdded = true;
let isSaved = false;
console.log("Type of isAdded : " +typeof isAdded);
console.log("Type of isSaved : " +typeof isSaved);

//4. undefined
let address;
console.log("Type of address : " +typeof address);
let email = undefined;
console.log("Type of email : " +typeof email);


//5. object (null)
let phone = null;
console.log("Type of phone : " +typeof phone);

// 6. symbol
let symbolss = Symbol("fristName");
console.log(typeof symbolss);
console.log(symbolss);
console.log('Is :'+symbolss.toString());

// 7. BigInt  (premitive data type 7k thinawa)
const number1 =  12154545215648454484454564845454845548484848n
const number2 = 100

const result = number1 + BigInt(number2);
console.log(result); // BigInt ekathu krnwa nn dekama bigInt wenna one

// Non premitive data type (3 nai)
// 1. Object
//2. Array
// 3. Function

