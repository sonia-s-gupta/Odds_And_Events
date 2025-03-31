// numbers will be stored in this array
const numBankArr = [];
const numOddArr = [];
const numEvenArr = [];

//references to elements in the HTML code
const form = document.querySelector("form");
const numberInput = document.getElementById("number");
const bankOutput = document.querySelector("#numberBank output");
const oddsOutput = document.querySelector("#odds output");
const evensOutput = document.querySelector("#evens output");
const sortOneBtn = document.getElementById("sortOne");
const sortAllBtn = document.getElementById("sortAll");

const errorMessage = document.createElement("p");
form.append(errorMessage);

//check if input is a valid whole number
function isWholeNumber(value) {
    const num = Number(value);
    return Number.isInteger(num);
}

//Render number bank
const printBank = () => {
    let str = ""; 
    for (let i = 0; i < numBankArr.length; i++) {
        str += numBankArr[i];
        if (i < numBankArr.length - 1) {
            str += ", ";
        }
    }
    bankOutput.innerHTML = str; 
}

//Render sorted numbers
const printSorted = () => {
    oddsOutput.innerHTML = numOddArr.join(", ");
    evensOutput.innerHTML = numEvenArr.join(", ");
}

//add number to bank
form.addEventListener("submit", function(event){
    event.preventDefault(); 
    const value = numberInput.value;

    if (isWholeNumber(value)) {
        const number = Number(value);
        numBankArr.push(number);
        printBank();
        numberInput.value = "";
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "Please input a valid whole number.";
        errorMessage.style.color = "red";
    }
});

//Sort 1: pop one from numBankArr and sort into odd or even
sortOneBtn.addEventListener("click", () => {
    if (numBankArr.length > 0) {
        const number = numBankArr.shift(); //Remove first number
        if (number % 2 === 0) {
            numEvenArr.push(number);
        } else {
            numOddArr.push(number);
        }
        printBank();
        printSorted();
    }
});

//Sort All: pop all from numBankArr and sort into odd or even
sortAllBtn.addEventListener("click", () => {
    while (numBankArr.length > 0) {
        const number = numBankArr.shift();
        if (number % 2 === 0) {
            numEvenArr.push(number);
        } else {
            numOddArr.push(number);
        }
    }
    printBank();
    printSorted();
});