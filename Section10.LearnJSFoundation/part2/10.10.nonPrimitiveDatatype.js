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