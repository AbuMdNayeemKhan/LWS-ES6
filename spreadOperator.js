//spread operator

//var numbers = [1, 2, 3];

//var numbers2 = [...numbers];

//numbers.push(6);
//var newNumbers = [numbers[0], numbers[1], numbers[2], 4, 5];

//var spreadNumbers = [...numbers, 4, 5];

//spreadNumbers = [...numbers, ...numbers2];

//print data

let borovai = {
    borovainame: "Nayeem",
    borovaiage: 25,
    borovaiprofation: "Front End Developer",
}
let chotovai = {
    chotovainame: "Zioun",
    chotovaiage: 25,
    chotovaiprofation: "Student"
}

let bhaira = {
    ...borovai,
    ...chotovai
}

console.log(bhaira);