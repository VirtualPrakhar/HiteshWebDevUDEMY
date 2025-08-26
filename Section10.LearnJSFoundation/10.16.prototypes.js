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