//object
let obj = {};
console.log(obj);
console.log(typeof obj);

let username = {
    fname: "radha",
    isLoggedIn: true,
};
console.log(username);
console.log(username.fname);

const uniqueName={
    firstName:"Krishna",
    nickName:"Vasudeva",
};
console.log(uniqueName);
console.log(uniqueName.firstName);
console.log(uniqueName.nickName);

uniqueName.firstName="Mohanlal";
uniqueName.lastName="Radhe";
console.log(uniqueName);
console.log(uniqueName.firstName);
console.log(uniqueName.lastName);

const friendName={
    "Beautiful Name":"Radharani",
    anotherName: "Kanhaiya",
};
console.log(friendName);
console.log(friendName.anotherName);
console.log(friendName["Beautiful Name"]);


//Array
let anotherUser=["Krishna",true];
console.log(anotherUser);
console.log(anotherUser[0]);

let isVal= true;
console.log(isVal +1);



/* 
Summarize=====================>>>>>>>>>>>>>>>>>>>>>

This lecture focuses on non-primitive data types in JavaScript, specifically objects and arrays. Here are the main points:

Non-Primitive vs. Primitive Types: The lecture begins by contrasting non-primitive types with primitive types, emphasizing how data is managed and stored in memory.

Objects: Objects are introduced as structures made up of key-value pairs. The lecture demonstrates how to create objects and use console logging to display their types and values. It highlights the mutability of object properties, even when declared as constants.

Accessing Object Properties: The methods for accessing object properties using dot notation and square bracket notation are explained, especially useful for property names that contain spaces.

Arrays: Arrays are described as collections of items, with an explanation of how to create arrays and access elements using their index positions. The importance of maintaining element order in arrays is emphasized since arrays do not use keys like objects.

Implicit Type Conversion: The lecture touches on JavaScript's implicit type conversion and how operations can yield unexpected results when mixing data types. Examples illustrate how numbers and strings interact, as well as how JavaScript handles boolean values. The concept of 'NaN' (not a number) is also introduced.

Dynamic Typing and Experimentation: The lecturer encourages viewers to explore JavaScript's dynamic typing and engage in self-directed research and experimentation with type conversions and operations to enhance their understanding.
 */