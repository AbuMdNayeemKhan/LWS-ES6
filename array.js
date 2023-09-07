// Array.protorype.find();
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numTwo = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//map

let mapResult = number.map((x) => {
    return 1 + x;
});

console.log(mapResult);


//concate
const constData = number.concat(numTwo);


//console.log(constData);


//push
const numberThree = number.push[21, 22];


//console.log(numberThree);

//splice

let spliceResult = number.splice(1, 2, 11, 12, 13);

//console.log(number);

// slice

let data = number.slice(2, 7);
//console.log(data);

// Array filter
const passed = number.filter((value, index, array)=>{
    return value < 4;
});

//console.log( "Jara pass korche: " + passed );

//find the current the geter number from 5

const currentNum = number.find(function(numpara){
    return numpara == 5;
});

const findIndex = number.findIndex(function(currentVal, indexNum, ArrayData){
    return currentVal == 6;
});

//console.log(findIndex);

// ==========find index
const result = number.findIndex(function(value, index, array){
    return value > 2;
});

//console.log(result);