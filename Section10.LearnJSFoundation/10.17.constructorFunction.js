// Normal Function
function radha(){
    console.log("Radhe Shyam");
}
radha();

// Constructor Function
function Person(name){
    console.log("Radha",name);
}
Person("Krishn");


function Person2(name,age){
    this.name = name;
    this.age = age;
    console.log(name,age);
}
Person2("RadhaRani",21);


function Car(make,model){
    this.make = make;
    this.model = model;
}
let myCar = new Car("Mahindra","Bolero");
console.log(myCar);
let myNewCar = new Car("Kia","Seltos");
console.log(myNewCar);

//without 'new' keyword
function Car2(make,model){
    this.make = make;
    this.model = model;
}
let myCar2 = Car("Tata","Safari");
console.log(myCar2);


//we can declare new values too by the help of 'this' keyword
function Tea(type){
    this.type = type;
    //declaring new variable(paramerter)
    this.describe = function(){
        return `That is a Cup of ${this.type}`;
    }
}
let lemonTea = new Tea("Lemon Tea");
console.log(lemonTea);
console.log(lemonTea.describe());

// Constructor Function with Prototype
function Animal(species){
    this.species = species;
}
Animal.prototype.sound = function(){
    return `${this.species} makes noise`;
}
let dog = new Animal("Dog");
console.log(dog.sound());

// Some Common Errors
function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}
let tea = new Drink("Tea");
let coffee = Drink("Coffee"); //it will throw us error cz we made a check to find it






/* 
Summarize ===============>>>>>>>>>>>>>>

This lecture focuses on functional constructors in JavaScript and how they differ from traditional object-oriented programming. Here are the main points:

Understanding Functional Programming: Importance of grasping functional programming principles before diving into constructor syntax.

Constructor Function: Introduces constructor functions as blueprints for creating multiple objects with shared properties and methods.

Best Practices: Emphasizes the use of the 'function' keyword and the convention of capitalizing the first letter of the function name.

Using 'this' Keyword: Explains how 'this' refers to the newly created object within a constructor function.

Object Instantiation: Covers how to instantiate objects using the 'new' keyword to create instances while retaining their unique properties.

Prototypes: Discusses how prototypes can be used to add methods to constructor functions, with an example involving an 'Animal' constructor.

Error Handling: Introduces methods to check if a constructor function is called without 'new' and how to throw errors for proper usage.

Overall, it provides a comprehensive overview of functional constructors, covering key concepts such as constructor functions, the 'this' keyword, object instantiation, prototypes, and error handling. 
*/