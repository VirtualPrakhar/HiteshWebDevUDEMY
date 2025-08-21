/* 
Challenge 1: Write a function named 'makeTea` that takes one parameter, 'typeofTea', and returns a string like "Making green tea" when called with "green tea"`. Store the result in a variable named 'teaOrder'. 
*/
function makeTea(typeofTea){
    return `Making ${typeofTea}`;
}
let teaOrder= makeTea("Green Tea");
console.log(teaOrder);


/* 
Challenge 2: Create a function named 'orderTea' that takes one parameter, `teaType`. Inside this function, create another function named 'confirmOrder' that returns a message like "Order confirmed for chai".
Call 'confirmOrder' from within 'orderTea' and return the result. 
*/
console.log("########## 2   ##############");
function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for chai`;
    }
    return confirmOrder();
}
let orderConfirmation= orderTea("chai");
console.log(orderConfirmation);


/* 
Challenge 3: Write an arrow function named 'calculateTotal' that takes two parameters: `price` and `quantity'. The function should return the total cost by multiplying the `price` and `quantity`.
Store the result in a variable named 'totalCost`. 
*/
console.log("#########  3   ###############");
const calculateTotal=(price,quantity) =>{
    return price * quantity;
}
let totalCost=calculateTotal(500,100);
console.log(totalCost);

//using implicit return way
const calculateTotal2=(price,quantity) => price * quantity;
let totalCost2= calculateTotal2(700,100);
console.log(totalCost2);


//*************High Order Function

/* 
Challenge 4: Write a function named 'processTeaOrder` that takes another function `makeTea', as a parameter and calls it with the argument "earl grey".
Return the result of calling 'makeTea`.  
*/
console.log("#########  4   ###############");
function makeTea(typeofTea){
    return `makeTea: ${typeofTea}`;
}
function processTeaOrder(teaFunction){
    return teaFunction("earl grey");
}
let order= processTeaOrder(makeTea);
console.log(order);


/*
Challenge 5: Write a function named 'createTeaMaker' that returns another function. The returned function should take one parameter, `teaType` and return a message like "Making green tea",
Store the returned function in a variable named 'teaMaker' and call it with "green tea". 
*/
console.log("########   5   ################");
function createTeaMaker(name){
    return function(teaType){
        return `Making ${teaType}`;
    };
}
let teaMaker=createTeaMaker();
let result= teaMaker("green tea");
console.log(result);