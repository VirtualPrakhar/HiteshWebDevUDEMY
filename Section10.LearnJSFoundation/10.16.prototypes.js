//prototype example for browser
let myVals=[12,34,56,78,90];


let computer={cpu:51};
let lenovo={screen:"HD"};
let radhaHardware={};

console.log(computer);
console.log(`COMPUTER =>`,computer.__proto__);


let computer2={cpu:5};
let lenovo2={
    screen:"HD",
    __proto__:computer2,
};
let kanhaHardware={};
console.log(`LENOVO2 =>`,computer2.__proto__);


//Another way of getting prototype
let genericCar={tyres:4};
let tesla={driver:'AI'};
Object.setPrototypeOf(tesla,genericCar);

console.log(`TESLA =>`,tesla);
console.log(`GENERIC CAR =>`,genericCar);

console.log(`TESLA =>`,Object.getPrototypeOf(tesla));
// Object.setPrototypeOf(genericCar,tesla);
// console.log(`TESLA =>`,Object.getPrototypeOf(genericCar));

//hasOwnProperty()
const obj1 = {};
obj1.property1 = 42;
console.log(obj1.hasOwnProperty(`property1`));

console.log(obj1.hasOwnProperty(`toString`));

console.log(obj1.hasOwnProperty(`hasOwnProperty`));




/* 
Summarize====================>>>>>>>>>>>>>>>>>>>>>>

This lecture provides a comprehensive overview of prototypes in JavaScript, transitioning from basic concepts to more advanced programming paradigms. Here are the main points:

Foundation Review: The lecture begins with a review of essential JavaScript concepts, encouraging practice through coding exercises.

Prototype-Based Language: JavaScript is emphasized as a prototype-based language, which allows inheritance and property sharing among objects.

Object-Oriented Programming (OOP): Key concepts such as classes, constructors, and instances are introduced, explaining that classes act as blueprints for creating objects.

Practical Examples: The instructor demonstrates practical applications, like creating forms and grouping input fields into a class, using diagrams to illustrate class-object relationships.

Manipulating Prototypes: An in-depth explanation of how prototypes work, including access and manipulation using the __proto__ property and the Object.getPrototypeOf() method.

Understanding Properties: The hasOwnProperty() method is discussed, explaining its importance in distinguishing between an object’s own properties and those inherited from its prototype.

Encouragement for Exploration: The lecture concludes by encouraging further exploration of JavaScript's prototype system, setting the stage for advanced topics in upcoming lectures. 
*/