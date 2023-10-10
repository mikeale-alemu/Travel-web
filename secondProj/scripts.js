// Javascript Array method
// Get the third element of fruits:
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
let fruit = fruits.at(2);
// Output of fruit is: -> Apple
let fruit1 = fruits.at();
// Output is: -> Banana
// Other get the third element of fruits: 
let fruit2 = fruits[2];
// Output of fruit2 is: -> Apple
// Syntax: => array.at(index)

//Join two arrays:
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);
// Output of children is: -> Cecilie,Lone,Emil,Tobias,Linus
//Join three arrays:
const arr3 = ["Cecilie", "Lone"];
const arr4 = ["Emil", "Tobias", "Linus"];
const arr5 = ["Robin"];
const children1 = arr3.concat(arr4, arr5);
// Output of children1 is: -> Cecilie,Lone,Emil,Tobias,Linus,Robin
//Concatenate nested arrays:
const arr6 = [1, 2, [3, 4]];
const arr7 = [
    [5, 6], 7, 8
];
const children2 = arr6.concat(arr7);
// Output of children2 is: -> 1,2,3,4,5,6,7,8
//Syntax: => array1.concat(array2, array3, ..., arrayX)

//Fill all the elements with a value:
let examp = fruits.fill("Kiwi");
// Output of examp is: -> Kiwi,Kiwi,Kiwi,Kiwi
//Fill the last two elements:
let examp1 = fruits.fill("Kiwi", 2, 4);
// Output of examp1 is: -> Banana,Orange,"Kiwi","Kiwi"
//Syntax: => array.fill(value, start, end)

// return an array of all values in ages[] that are 18 or over:
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}
// Output of result is: -> 32,33,40
// Syntax: => array.filter(function(currentValue, index, arr), thisValue)
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result1 = words.filter((word) => word.length > 6);
console.log(result1);
// output:  ["exuberant", "destruction", "present"]
function isBigEnough(value) {
    return value >= 10;
}
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
// Syntax: => array.forEach(callback(currentvalue,index,arr),thisArg)
let arre = ["C", "C++", "Python"];
arre.forEach(function(fetch) { document.writeln(fetch); });
//Output: -> C C++ Python

let sum = 0;
let are = [10, 18, 12, 20];
are.forEach(function myFunction(element) {
    sum = sum + element;
    document.writeln(sum);
});
//Output: -> 10 28 40 60
// Syntax: => array.includes(element,start)  
let arr8 = ["AngularJS", "Node.js", "JQuery"]
let result2 = arr8.includes("AngularJS");
document.writeln(result2);
//Output: -> true

let arr9 = ["AngularJS", "Node.js", "JQuery"]
let result3 = arr9.includes("AngularJS", 1); //returns false, as "AngularJS" is not present after index 1.  
document.writeln(result);
//Output: -> false
//Syntax: => array.indexOf(element,index)  
let arr10 = ["C", "C++", "Python", "C++", "Java"];
let result4 = arr10.indexOf("C++");
document.writeln(result4);
// Output: -> 1

var arr11 = ["C", "C++", "Python", "C++", "Java"];
var result5 = arr11.indexOf("JavaScript");
document.writeln(result5);
//Output: -> -1
//Syntax: => array.join(separator)
let arr12 = ["AngularJs", "Node.js", "JQuery"]
let result6 = arr12.join()
document.write(result6);
//Output: -> AngularJs,Node.js,JQuery

var arr13 = ["AngularJs", "Node.js", "JQuery"]
var result7 = arr13.join('-')
document.write(result7);
//Output: -> AngularJs-Node.js-JQuery
//Syntax: => array.map(callback(currentvalue,index,arr),thisArg)
var arr14 = [2.1, 3.5, 4.7];
var result8 = arr14.map(Math.round);
document.writeln(result8);
//Output: -> 2,4,5

var arr15 = [2, 4, 6];
var result9 = arr15.map(x => x * 3);
document.writeln(result9);
//Output: -> 6,12,18
//Syntax: => array.push(element1,element2....elementn)
//Syntax: => array.reverse()
//Syntax: => array.slice(start,end)  
var arr16 = ["AngularJS", "Node.js", "JQuery", "Bootstrap"]
var result10 = arr16.slice(0, 3);
document.writeln(result10);
//Output: -> AngularJS,Node.js,JQuery
//Syntax: => array.splice(start,delete,element1,element2,?,elementn)
var arr17 = ["Monday", "Tuesday", "Thursday", "Friday"];
var result11 = arr17.splice(2, 0, "Wednesday")
document.writeln(arr17);
//Output: -> Monday,Tuesday,Wednesday,Thursday,Friday

var arr18 = ["Monday", "Tuesday", "Sunday", "Friday"];
var result12 = arr18.splice(2, 1, "Wednesday", "Thursday");
document.writeln("Updated array: " + arr18 + "<br>");
document.writeln("Removed element: " + result12);
//Output: => Updated array: Monday,Tuesday,Wednesday,Thursday,Friday
//           Removed element: Sunday