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
console.log(personAge);

//print current address
const {address : {currentAddress : bortomanThikana} = {}} = person;
console.log(bortomanThikana);

//print persons name using destructuring
console.log(personName);