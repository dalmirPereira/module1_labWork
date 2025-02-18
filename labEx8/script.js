// ----- JavaScript Function rollDice() to handle the dice generator -----

function getDice() {
    // Get the selected number of faces from the dropdown menu (D6 and D10)
    const diceSelect = document.getElementById('diceSelect');
    // Convert the selected value to a number
    const numFaces = parseInt(diceSelect.value);
    
    // Inspect the value and type retrieved form the element 
    console.log(`this is the value grabbed from <select>: ${diceSelect.value}, and type: ${typeof diceSelect}`);
    // Inspect the value and type of the variable that will be used in random number generation.
    console.log(`this is the value grabbed from <select>: ${numFaces}, and type: ${typeof numFaces}`);

    // Display the result of the dice roll in the "diceResult" span
    const result = rollDice(numFaces)
    document.getElementById('diceResult').innerText = result;
}

function rollDice(numFaces){
    // Generate a random number between 1 and the number of faces on the selected dice
    // Math.random() generates a number between 0 and 1, and Math.floor() rounds it down
    return Math.floor(Math.random() * numFaces) + 1;    
}