// tagged template literals

function modifier(strings, ...values){
    const m = strings.reduce((prev, current)=>{
        return prev + current + (values.length ? "Mr. " + values.shift() : "");
    }, "");
    return m;
}



var player1 = "Sakib";
var player2 = "Tamim";

//console.log(`we have ${player1} and also we have ${player2}`);

console.log(modifier`amader palyer 1 ${player1} r player 2 ${player2}`);