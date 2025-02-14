// ----- Lab Exercise 4: JavaScript and Node.js -----

function sum(a,b){
    return a + b;
}   

function sub(a,b){
    return a - b;
}

function div(a,b){
    return a / b;
}

function mul(a,b){
    return a * b;
}

function addname(name1){
    return "Hello " + name1;
}

console.log(sum(10,5));
console.log(sub(10,5));
console.log(div(10,5));
console.log(mul(10,5));
console.log(addname("John"));

// ----- Extension ----

function square(number) {
    return number * number;
}

function squareRoot(number) {
    return Math.sqrt(number);
}

function rectangle(base, height) {
    return base * height;
}

function kmToMiles (km) {
    return Math.round(km * 0.621371*1000000)/1000000;
}

console.log(square(100));
console.log(squareRoot(100));
console.log(rectangle(10,5));
console.log(kmToMiles(100));