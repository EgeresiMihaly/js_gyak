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


let password1 = "vmoaeASDF123421";

// Megvizsgáljuk a jelszó hosszát
if (password1.length > 8) {
    // Megvizsgáljuk, tartalmaz-e kisbetűket
    if (/[a-z]/.test(password1)) {
        // Megvizsgáljuk, tartalmaz-e nagybetűket
        if (/[A-Z]/.test(password1)) {
            // Megvizsgáljuk, tartalmaz-e speciális karaktereket
            if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\-]/.test(password1)) {
                console.log("A jelszó megfelel a kritériumoknak.");
            } else {
                console.log("A jelszó nem tartalmaz speciális karaktereket.");
            }
        } else {
            console.log("A jelszó nem tartalmaz nagybetűket.");
        }
    } else {
        console.log("A jelszó nem tartalmaz kisbetűket.");
    }
} else {
    console.log("A jelszó hossza nem megfelelő (legalább 9 karakter).");
}