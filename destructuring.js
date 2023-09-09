//create an object for a person

const person = {
    name: "Nayeem Khan",
    age: 25,
    // address: {
    //     currentAddress: "Mirpur",
    //     permanentAddress: "Barishal"
    // }
}

//print persons name
const personName = person["name"];

const {age : personAge} = person;
//console.log(personAge);

//print current address
const {address : {currentAddress : bortomanThikana} = {}} = person;
//console.log(bortomanThikana);

//print persons name using destructuring
//console.log(personName);

// array destructuirng 
var numbers = [1, 2, 3, 4, [5, 55, 57, 59], 6, 7, 8, 9];

var [,,,,[,,i]] = numbers;

console.log(i);