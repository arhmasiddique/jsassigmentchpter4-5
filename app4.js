//practice exercise 4.1
//boolean value
let myVariable = true;

//  Output the value of the variable to the console.
console.log("Value of myVariable:", myVariable);

//  Check whether the variable is true and output a message if so.
if (myVariable) {
    console.log("myVariable is true!");
}

//  Add another if statement with ! to check whether the condition is not true.
if (!myVariable) {
    console.log("myVariable is not true!");
} else {
    console.log("myVariable is true with ! operator!");
}



//  Change the variable to the opposite and observe the changes.
myVariable = !myVariable;

// Repeating steps 2-4 with the updated variable.
console.log("Value of myVariable:", myVariable);

if (myVariable) {
    console.log("myVariable is true!");
}

if (!myVariable) {
    console.log("myVariable is not true!");
} else {
    console.log("myVariable is true with ! operator!");
}


//practice exercise 4.2

//  Create a prompt to ask the user's age
let userAge = prompt("What is your age?");

//  Convert the response from the prompt to a number
userAge = Number(userAge);

//  Declare a message variable for the console message
let message;

//  Check if the input age is equal to or greater than 21
if (userAge >= 21) {
    // Set the message variable to confirm entry to a venue and the ability to purchase alcohol
    message = "Welcome! You can enter the venue and purchase alcohol.";
}
//  Check if the input age is equal to or greater than 19
else if (userAge >= 19) {
    // Set the message variable to confirm entry to the venue but deny the purchase of alcohol
    message = "Welcome! You can enter the venue, but unfortunately, you cannot purchase alcohol.";
}
//  Provide a default else statement to set the message variable to deny entry if none are true
else {
    message = "Sorry, you are not allowed entry.";
}

//  Output the response message variable to the console
console.log(message);


//practice exercise 4.3

//  Create a Boolean value for an ID variable
let isIDValid = false; // Change to false to test different scenarios

//  Using a ternary operator, create a message variable to check ID validity
let messag = isIDValid ? "Welcome! You are allowed into the venue." : "Sorry, your ID is not valid. Entry denied.";

//  Output the response to the console
console.log(messag);




//practice exercise 4.4

//  Set a variable with a random value (0-5 for 6 possible results)
let randomValue = Math.floor(Math.random() * 6);

//  Create a prompt to get a string value input from the user
let userQuestion = prompt("Ask the Magic 8-Ball a question:");

//  Create 6 responses using the switch statement
let response;
switch (randomValue) {
    case 0:
        response = "It is certain.";
        break;
    case 1:
        response = "Without a doubt.";
        break;
    case 2:
        response = "Reply hazy, try again.";
        break;
    case 3:
        response = "Cannot predict now.";
        break;
    case 4:
        response = "Don't count on it.";
        break;
    case 5:
        response = "Outlook not so good.";
        break;
    default:
        response = "Error: Invalid random value.";
}

//  Create a variable to hold the end response
let finalResponse = `You asked: "${userQuestion}"\nThe Magic 8-Ball says: "${response}"`;

//  Output the user's original question and the randomly selected case response to the console
console.log(finalResponse);




//practice exercise 4.5

//  Create a variable called prize and use a prompt to ask the user to set the value
let prize = prompt("Set the prize value by selecting a number between 0 and 10:");

//  Convert the prompt response to a number data type
prize = Number(prize);

//  Create a variable for the output message
let outputMessage = "My Selection: ";

//  Using the switch statement, provide a response regarding the awarded prize
switch (prize) {
    case 0:
        outputMessage += "You win a small keychain!";
        break;
    case 1:
        outputMessage += "Congratulations! You get a free coffee!";
        break;
    case 2:
        outputMessage += "You've won a mystery book!";
        break;
    case 3:
    case 4:
        outputMessage += "Double win! You get a T-shirt and a pen!";
        break;
    case 5:
    case 6:
    case 7:
        outputMessage += "You win a gift card to your favorite store!";
        break;
    case 8:
    case 9:
        outputMessage += "Big win! You get a weekend getaway!";
        break;
    case 10:
        outputMessage += "Jackpot! You win a new car!";
        break;
    default:
        outputMessage += "Invalid selection. No prize for you!";
}


//  Output the message back to the user
console.log(outputMessage);







//CHAPTER PROJECT

//number game
let dynamicNumber = 10; // Change this to any dynamic number you like
let userNumber = prompt("Enter a number:");

if (userNumber > dynamicNumber) {
    console.log("Your number is greater than the dynamic number.");
} else if (userNumber < dynamicNumber) {
    console.log("Your number is less than the dynamic number.");
} else {
    console.log("Your number is equal to the dynamic number.");
}



//friend checker game

let userName = prompt("Enter a name:");
let friendName;

switch (userName) {
    case "Alice":
    case "Bob":
    case "Charlie":
    case "Ali":
        friendName = true;
        break;
    default:
        friendName = false;
}

if (friendName) {
    console.log("You are a friend!");
} else {
    console.log("I don't know you.");
}


//ROCK PAPER SECISSOR GAME
let choices = ["Rock", "Paper", "Scissors"];
let playerSelection = Math.floor(Math.random() * 3); // 0, 1, or 2
let computerSelection = Math.floor(Math.random() * 3); // 0, 1, or 2

let resultMessage;

if (playerSelection === computerSelection) {
    resultMessage = "It's a tie!";
} else if (
    (playerSelection === 0 && computerSelection === 2) ||
    (playerSelection === 1 && computerSelection === 0) ||
    (playerSelection === 2 && computerSelection === 1)
) {
    resultMessage = "You win!";
} else {
    resultMessage = "You lose!";
}

console.log(`Player chose: ${choices[playerSelection]}`);
console.log(`Computer chose: ${choices[computerSelection]}`);
console.log(resultMessage);
