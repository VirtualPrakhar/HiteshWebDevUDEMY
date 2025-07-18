// Six Loop Challenges



/* 
Challenge 1: Write a while loop that calculates the sum of all numbers from 1 to 5 and store the result in a variable named 'sum'. 
*/
let sum =0;
let i= 0;
while(i<=5){  // or while(i<6)
    sum=sum+i; // or sum+=i;
    i++;
}
console.log(sum);

console.log("#############  2   ################");

/* 
Challenge 2: Write a while loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'. 
*/
let countdown=[];
let j=5;
while (j>0) {
    countdown.push(j);    
    j--;
}
console.log(countdown);

console.log("###########    3   ##################");

/* 
Challenge 3: Write a do while loop that prompts a user to enter their favorite tea type until they enter "stop". Store each tea type in an array named 'teaCollection'. 
*/
// let teaCollection=[];
// let tea;
// do{
//     tea= prompt(`Enter your Favourite Tea & type "stop" to finish`);
//     if(tea !== "stop"){
//         teaCollection.push(tea);
//     }
// }
// while(tea!=="stop");
// console.log(teaCollection);

console.log("#############  4   ################");

/* 
Challenge 4: Write a do while loop that adds numbers from 1 to 3 and stores the result in a variable named `total`. 
*/
let total=0;
let k=1;
do{
    total +=k;
    k++;
}
while(k<=3);
console.log(total);

console.log("############## 5   ###############");

/* 
Challenge 5: Write a for loop that multiplies each element in the array [2, 4, 6] by 2 and stores the results in a new array named 'multipliedNumbers'. */
let multipliedNumbers=[];
let numbers= [2, 4, 6];
for(let l=0;l<numbers.length;l++)
{
    // let takeNumber = numbers[l]*2;
    // multipliedNumbers.push(takeNumber);

    // or we can also write this on the place of both line 58,59
    multipliedNumbers.push(numbers[l]*2);
}
console.log(multipliedNumbers);

console.log("############## 6   ###############");

/* 
Challenge 6: Write a for loop that lists all the cities in the array ["Paris", "New York", "Tokyo", "London"] and stores each city in a new array named 'cityList`. 
*/
let cities=["Paris", "New York", "Tokyo", "London"];
let cityList=[];
for(let c=0;c<cities.length;c++)
{
    const myCity= cities[c];
    cityList.push(myCity);
}
console.log(cityList);
// console.log(cities);