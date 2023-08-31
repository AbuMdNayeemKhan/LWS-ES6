// ternary operator

//cheacking adult or not in normal way
var age = 18;
var type;

if (age >= 18){
    type = "adult";
} else {
    type = "Childrane";
}
console.log( "This result make by older way:" + type);

var type = (age >= 18) ? "Modern result: " + type : "Modern result: " + type;
console.log(type);