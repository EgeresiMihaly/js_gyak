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

let year = 2023;




// Write an if-else statement to check if the password: "vmoaeASDF123421" meets these criterias:
//- length > 8, contains uppercase, contains lowercase and contains special characters

let password = "vmoaeASDF123421";

if (password.length > 8 &&
    password.match(/[A-Z]/) && 
    password.match(/[a-z]/) && 
    password.match(/[^a-zA-Z0-9]/)) {
    console.log("A jelszó megfelel a követelményeknek.");
} else {
    console.log("A jelszó nem felel meg a követelményeknek.");
}

// Írj egy if-else utasítást annak ellenőrzésére, hogy 25.01 12 és 25 között van-e.

const num = 25.01;

if (num < 12 && num > 25){
    console.log('A szám 12 és 25 között van.');
} else {
  console.log('A szám nem esik 12 és 25 közé.');
}


// Írj egy if-else utasítást annak megállapítására, hogy 2024 egy évszázados év-e vagy sem (00-val végződik).

let year2 = 2024;

if (year2 % 100 === 0) {
    console.log('Az év évszázados év.');
  } else {
    console.log('Az év nem évszázados év.');
  }