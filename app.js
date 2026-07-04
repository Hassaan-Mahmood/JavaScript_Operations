alert("Hello World!");

var totalCost = (2 + 3) * 4 + 5; // 37
console.log(totalCost);

var totalCost = (2 + (3) + 4) * 2; // 18
console.log(totalCost);

var totalCost = ((2 + 3) + 4) * 2; // 18
console.log(totalCost);

var resultOfComputation = (2 * 4) * (4 + 2); // 48
console.log(resultOfComputation);

alert("2 plus 2 equals " + 2 + 2); // => 22

alert("2 plus 2 equals " + (2 + 2)); // => 4

var species = prompt("Enter your species", "Dog"); // => Right way
console.log(species);

prompt("Enter your species:"); // => Wrong way
console.log(prompt);

var question = "Your species?";
var defaultAnswer = "human";
var spec = prompt(question, defaultAnswer);
console.log(spec);

var numberOfCats = prompt("How many cats?");
var tooManyCats = numberOfCats + 1;
console.log(tooManyCats); // => 21

var uesrValue = prompt();
console.log(uesrValue);

if (2 < 1) {
    console.log("hmm")
}

var x = "Vatican";
var correctAnswer = "Vatican";
var score = 0;
var userIQ;
if (x === correctAnswer) {
    score++;
    userIQ = "genius";
    alert("Correct!" + score + userIQ);
}

if (1 < 2) alert("Hello"); // => Legal
if (1 < 2) { alert("Hello"); } // => Also Legal

var yourTicketNumber = 487207;
if (yourTicketNumber !== 487208) {
    alert("Better luck next time.");
}

if ("rose" == "rose") {
    console.log("Cograts!");
}

var age = 20;
var res = "U.S";
if (age > 65 || age < 21 && res === "U.S") {
    console.log("congrats");
} else {
    console.log("try next time");
}

var age = 66;
var res = "U.S";
if (age > 65 || (age < 21 && res === "U.S")) {
    console.log("congrats"); // This line will be executd
} else {
    console.log("try next time")
}

var age = 20;
var res = "U.S";
if ((age > 65 || age < 21) && res === "U.S") {
    console.log("congrats"); // This line will be executd
} else {
    console.log("try next time");
}

if ((x === y || a === b) && c === d) {
    g = h;
}
else {
    e = f;
}

var a = 2;
var b = 2;
var c = 2;
if (a === b) {
    if (b === c) {
        console.log("b is equal to c");
    } else if (a === c) {
        console.log("a is equal to c");
    } else {
        console.log("b is not equal to c");
    }
} else {
    console.log("all are not equal to each them");
}



// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Flip Card Game</title>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
//     <link rel="stylesheet" href="style.css">
// </head>

// <body>
//     <div class="game">
//         <div class="card">
//             <img src="Images/back.png" alt="Back Card" class="card-img  animate__animated " id="card1">
//         </div>
//         <div class="card">
//             <img src="Images/back.png" alt="Back Card" class="card-img  animate__animated " id="card2">
//         </div>
//         <div class="card">
//             <img src="Images/back.png" alt="Back Card" class="card-img  animate__animated " id="card3">
//         </div>
//     </div>
//     <button onclick="flipCard()">Play Game</button>

//     <script src="app.js"></script>
// </body>

// </html>



// body {
//     background-color: darkcyan;
//     height: 100vh;
//     display: flex;
//     justify-content: space-evenly;
//     align-items: center;
//     flex-direction: column;
// }


// .game  {
//     display: flex;
//     justify-content: space-evenly;
//     align-items: center;
//     gap: 40px;
// }

// .card {
//     width: 350px;
//     height: 480px;
// }

// .card-img {
//     width: 100%;
// }


// button {
//     padding: 20px 50px;
//     background-color: black;
//     font-size: 30px;
//     border-radius: 20px;
//     border: none;
//     color: white;
// }


// let card1 = document.getElementById("card1")
// let card2 = document.getElementById("card2")
// let card3 = document.getElementById("card3")

// let random = Math.ceil(Math.random() * 3)

// function flipCard () {
//     if(random === 1)
//     card1.classList.add("animate__flipInY");
//     card2.classList.add("animate__flipInY");
//     card3.classList.add("animate__flipInY");

//     imageSrcChange();
// }

// function imageSrcChange (){
//     card1.src = "Images/king.png"
//     card2.src = "Images/queen.jfif"
//     card3.src = "Images/joker.png"
// }
