// function-input->parameter
//-->some code is written
//-->return value

//call function-->argument

function greetUser(name) {
    console.log(name);
}

greetUser("juliet");
greetUser("josephine");
greetUser("jane");

function square(num) {
    let result = num * num
    return result;
}

let value1 = square(8);
let value2 = square(12);
console.log(value1);
console.log(value2);

function convertToCelsius(fahrenheit) {
    let celsius = ((fahrenheit - 32) *5)/9;
    return celsius;
}

let tempOne = convertToCelsius(212);
console.log(tempOne);

function add(a,b,c) {
    return a + b + c;

}

let sumnumbers =add(4,5,6);
console.log(sumnumbers);

function minus(a,b) {
    return a - b;
}

let subtractnumbers =minus(15,5);
console.log(subtractnumbers);

function getScoreText(name = "jane", score = 45) {
    return `Name: ${name} -Score: ${score}`;
}

let scoredata = getScoreText("juliet", 67);
console.log(scoredata);

function myplace(town) {
    return `I live in ${town}`;
}

let data1 = myplace("nairobi");
console.log(data1);