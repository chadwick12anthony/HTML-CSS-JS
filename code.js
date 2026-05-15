// var word = "bottles";
// var count = 99;
// while (count > 0) {
//     console.log(count + " " + word + " of beer on the wall");
//     console.log(count + " " + word + " of beer,");
//     console.log("Take one down, pass it around,");
//     count = count - 1;
//     if (count > 0) {
//         console.log(count + " " + word + " of beer on the wall.");
//     } else {
//         console.log("No more " + word + " of beer on the wall.");
//     }
// }

// var randomloc = Math.floor(Math.random() * 5);
// var location1 = randomloc;
// var location2 = randomloc + 1;
// var location3 = randomloc + 2;
// var guess; 
// var hits = 0;
// var guesses = 0;
// var isSunk = false;
// while (isSunk == false) { 
//     guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
//     if (guess < 0 || guess > 6) { 
//         alert("Please enter a valid cell number!");
//     } else { 
//         guesses = guesses + 1;
//         if (guess == location1 || guess == location2 || guess == location3) {
//             alert("HIT!");
//             hits = hits + 1;
//             if (hits == 3) {
//                 isSunk = true;
//                 alert("You sank my battleship!");
//                             }
//         }   else {
//             alert("MISS");
//             }
//     }
// } 
// var stats = "You took " + guesses + " guesses to sink the battleship, " +
// "which means your shooting accuracy was " + (3/guesses);
// alert(stats);

function doIt(param) {
    param = 2;
    }
var test = 1;
doIt(test);
console.log(test);