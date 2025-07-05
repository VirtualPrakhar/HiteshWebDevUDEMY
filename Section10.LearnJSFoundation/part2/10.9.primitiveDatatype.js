// Number
let balance =120; //Primitive datatype
console.log(balance);
console.log(typeof balance);

let anotherBal = new Number(169); //Non-Primitive datatype cz it returns as object
console.log(anotherBal);
console.log(anotherBal.valueOf());
console.log(typeof anotherBal);

// Boolean
let isActive =true;
console.log(isActive);
console.log(typeof (isActive));

let reallyActive = new Boolean(false);
console.log(reallyActive);
console.log(reallyActive.valueOf());
console.log(typeof reallyActive);

// Null and Undefined
let fname = null;
let lname = undefined;
console.log(fname);
console.log(lname);

// String
let string1 ="radha";
let string2 ='krishna';
let username ="ShyamaJu";

// string concatenation
let oldGreet = string1 + username + "KanhaJu" + string2;
console.log(oldGreet);

//string interpolation
let newGreet = ` ${string1} My name is ${username} :) ${string2} `;
console.log(newGreet);

let demo = `value is ${2*2}`;
console.log(demo);