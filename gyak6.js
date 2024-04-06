// Write an if-else statement to check if 20.24 is positive, negative, or zero.

const number = 20.24;

if(number >0){
    console.log(number + " positive")
} else if (number < 0){
    console.log(number + " negative")
}
else{
    console.log(number + " zero")
}

// Write an if-else statement to check if a person aged 64.5 is eligible for a senior discount (age 65 or older)

// Felhasználó által megadott életkor
const age = 64.5;

// Nyugdíjas kedvezmény 65 éves kor felett
const seniorAge = 65;

// Ellenőrizzük, hogy a személy jogosult-e a nyugdíjas kedvezményre
if (age >= seniorAge) {
  console.log("A személy jogosult a nyugdíjas kedvezményre.");
} else {
  console.log("A személy nem jogosult a nyugdíjas kedvezményre.");
}

//  Write a ternary operator to determine if 2023 is a leap year or not.




