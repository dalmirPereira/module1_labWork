//------ Lab Exercise 7: Unit Testing ------

//This funcion sum() returns the sum of two numbers.
function sum(a,b){
    return a+b;
} 
//-----------------------------------------------------

//This funcion sub() returns the subtraction of two numbers (first argument minus second argument).
function sub(a,b){
    return a-b;
}
//-----------------------------------------------------

//This funcion div() returns the division of two numbers (first argument divided by the second argument).
function div(a,b){
    if (b === 0) throw new Error('Cannot divide by zero');
    return a/b;
}
//-----------------------------------------------------


//This funcion mul() returns the multiplication of two numbers.
function mul(a,b){
    return a*b;
}
//-----------------------------------------------------


//This funcion addname() adds the argument to the string "Hello " and return it.
function addname(name1){
    return "Hello "+name1;
}
//-----------------------------------------------------

//Unit test with Jest
module.exports = {
    sum,
    sub,
    div,
    mul,
    addname
  };


