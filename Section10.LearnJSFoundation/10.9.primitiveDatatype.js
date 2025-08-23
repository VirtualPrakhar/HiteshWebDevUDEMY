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




/* 
Summarize=================>>>>>>>>>>>>>>>>>>>>

This lecture focuses on understanding primitive data types in JavaScript, which are essential for effectively handling data. Here are the main points:

Data Types Classification: Data types are categorized into primitive and non-primitive types. Primitive types include:

Boolean: Represents true or false values.
String: A sequence of characters, which can be defined with single quotes, double quotes, or backticks for interpolation.
Number: Represents numerical values.
Null: Indicates the intentional absence of a value.
Undefined: A variable that has been declared but not yet assigned a value.
Symbol: A unique identifier used mainly as property keys in objects.
Null vs. Undefined: The differences are explained, with null signifying an intentional absence of any object value, while undefined indicates a declared variable without an assigned value.

String Manipulation: The lecture demonstrates how to create and manipulate strings, particularly using backticks for easier string interpolation.

Primitive Types and Objects: The implications of using the 'new' keyword to create objects from these primitive types are discussed, as it leads to more complex data types.

Introduction to Symbols: Symbols are introduced as unique identifiers, and their potential use as keys in objects is emphasized.
 */