// ----- Lab Exercise 5: Arrays -----

const firstArray = [1, 2, 3, 4, 5];

[firstArray[1], firstArray[4]] = [firstArray[4], firstArray[1]]
console.log(`Replacing the value of the element at position 1 and 4 (array destructuring):
${firstArray}\n`);

firstArray.unshift('new value')
console.log(`New element added to the beginning of the array (.unshift()):
${firstArray}\n`);

removeElement = firstArray.pop();
console.log(`Element at the end of the array was removed (.pop()):
${firstArray}\n`);

// ----- Extension -----

const newArray = ["value1", "value2", "value3"];

function arrayLength(array) {
  return array.length;
}

function createArray(input1, input2) {
  return [input1, input2];
}

console.log(`newArray: ${newArray}\n`);
console.log(`newArray Length: ${arrayLength(newArray)}\n`);
console.log(`Create a new array with inputs 10 and 20: ${createArray(10,20)}\n`);