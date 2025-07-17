/* Challenge 1: Declare an array named 'teaFlavors' that contains the strings "green tea","black tea","oolong tea". 
Access the first element of the array and store it in a variable named "firstTea". */
let teaFlavors =["green tea","black tea","oolong tea"];
const firstTea= teaFlavors[0];
console.log(teaFlavors);
console.log(firstTea);

console.log("########## 2   ###################");

/* Challenge 2: Declare an array named 'cities' containing "London","Tokyo","Paris","NewYork". 
Access the third element in the array and store it in a variable named 'favoriteCity'. */
let cities= new Array("london","tokyo","paris","new york");
const favoriteCity =cities[2];
console.log(cities);
console.log(favoriteCity);

console.log("########## 3   ###################");

/* Challenge 3: You have an array named 'teaTypes' containing "Herbal Tea","white Tea","masala tea".
Change the second element of the array to "jasmine tea".  */
let teaTypes=["Herbal Tea","white Tea","masala tea"];
console.log(teaTypes);
teaTypes[1]= "jasmine tea";
console.log(teaTypes);

console.log("#########  4   ####################");

/* Challenge 4: Declare an array named 'citiesVisited' containing "mumbai","sydney".
Add "berlin" to the array using push method. */

// without using push method
let citiesVisited =["mumbai","sydney"];
citiesVisited[citiesVisited.length] ="berlin";
console.log(citiesVisited);

//using push method
let citiesVisited2 =["mumbai","sydney"];
citiesVisited2.push("berlin");
console.log(citiesVisited2);

console.log("########## 5   ###################");

/* Challenge 5: You have an array named 'teaOrders' with "chai","iced tea","matcha","earl grey".
Remove the last element of the array using the pop method and store it in a variable named 'lastOrder'.   */
let teaOrders =["chai","iced tea","matcha","earl grey"];
console.log(teaOrders);
const lastOrders = teaOrders.pop();
console.log(teaOrders);

console.log("########## 6   ###################");

/* Challenge 6: You've an array named 'popularTeas' containing "green tea","oolong tea","chai".
Create a soft copy of this array named 'softCopyTeas'.  */
let popularTeas=["green tea","oolong tea","chai"];
let softCopyTeas= popularTeas;
// popularTeas.pop(); 
// softCopyTeas.pop(); // and if we perform any opertion to any of them so changes would be reflected on both cz they are referencing to the same memory space
console.log(popularTeas);
console.log(softCopyTeas);

console.log("###########    7   ##################");

/* Challenge 7: You have an array named 'topCities' containing "Berlin","singapore","new york".
Create a hard copy of this array named "hardCopyCities".  */
let topCities=["Berlin","singapore","new york"];
let hardCopyCities =[...topCities];
topCities.pop(); // now it won't affect both anymore cz the new copy is toatlly new to their new memory space
console.log(topCities);
console.log(hardCopyCities);

//with slice method
let topCities2=["Berlin","singapore","new york"];
let hardCopyCities2 =topCities2.slice();
hardCopyCities2.pop(); 
console.log(topCities2);
console.log(hardCopyCities2);

console.log("########## 8   ###################");

/* Challenge 8: You have two arrays, 'europeancities' containing "paris","rome" and 'AsianCities' containing "tokyo","bangkok".
Merge these two arrays into a new array named 'worldCities'. */
let europeanCities =["paris","rome"];
let asianCities =["tokyo","bangkok"];
let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);

console.log("########## 9   ###################");

/* Challenge 9: You have an array named 'teaMenu' containing "masala Chai","oolong tea", "green tea","earl grey".
Find the length of the array and store it in a variable named 'menuLength'.  */
let teaMenu =["masala Chai","oolong tea", "green tea","earl grey"];
let menuLength = teaMenu.length;
console.log(menuLength);
console.log(teaMenu);

console.log("########## 10  ###################");

/* Challenge 10: You have an array named 'cityBucketList' containing "kyoto","london","cape town","vancouver".
Check if "london" is in the array and store the result in the variable named 'isLondonInList' */
let cityBucketList =["kyoto","london","cape town","vancouver"];
let isLondonInList =cityBucketList.includes("london");
console.log(isLondonInList);