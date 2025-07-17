// Challenge 1 :Checking if a number is greater than another number
let num1 =5;
let num2=7;
if(num1>num2){
    console.log(`${num1} is greater`);
}else{
    console.log(`${num2} is greater`);
};

console.log("############   2   #################");

// Challenge 2 :Check if a string is equal to another string
let username="radha";
let anotherUsername="radha";
if(username == anotherUsername){
    console.log(`Pick another username`);
}else{
    console.log("You can pick this username");
}

console.log("###########    3   ##################");

// Challenge 3 :Checking if a variable is number or not
let score ="44";
if(typeof score==="number"){
    console.log("Yup its a Number");
}else{
    console.log("No that is not a number");
};

console.log("###########    4   ##################");

// Challenge 4 :Checking if a boolean value is true or false
let isTeaReady =true;
if(isTeaReady){
    console.log("tea is ready");
}else{
    console.log("tea is not ready");
};

console.log("#########  5   ####################");

// Challenge 5 :Checking if an array is empty or not
let items=[];
console.log(items.length);
if(items.length === 0){
    console.log("Array is Empty");
}else{
    console.log("Array is not Empty")
};