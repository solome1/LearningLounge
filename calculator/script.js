// Get the display element
let result = document.getElementById("inputext");

// Function to append a number or operator to the display
let calculate = (value) => {
    result.value += value;
}

// Function to calculate the result
let calculateResult = () => {
    try 
    {
        // Use a safer method to evaluate the expression
        result.value = Function('"use strict";return (' + result.value + ')')();
    } catch (err) 
    {
        alert("Enter a valid input");
    }
}

// Function to clear the display
let clearDisplay = () => {
    result.value = "";
}

// Function to delete the last character from the display
let deleteLastChar = () => {
    result.value = result.value.slice(0, -1);
}