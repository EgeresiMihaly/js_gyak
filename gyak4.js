// Define a function called "double" that takes a number as an argument and returns its double.

function double(number) {
    return number*2     
}
console.log(double(2))

// Define a function called "isEven" that takes a number as an argument and returns true if it's even, otherwise false.

function isEven(number) {
    return number % 2 === 0;    
}
console.log(isEven(4));
console.log(isEven(7));

// Write an arrow function called "cube" that takes a number as an argument and returns its cube.

const cube = number => number **3;
console.log(cube(3));


// Write a function called "getMax" that takes an array of numbers as an argument and returns the maximum number.
function getMax(szamTomb) {
    if (!Array.isArray(szamTomb) || szamTomb.length === 0) {
        return "Érvénytelen bemenet. Kérlek, adj meg egy nem üres számtömböt.";
    }
    let maxSzam = szamTomb[0];
    for (let i = 1; i < szamTomb.length; i++) {
        if (szamTomb[i] > maxSzam) {
            maxSzam = szamTomb[i];
        }
    }
    return `A maximális szám a tömbben: ${maxSzam}`;
}

const tomb = [10, 5, 8, 20, 15];
console.log(getMax(tomb));

function calculateAverage(numbersArray) {
    if (!Array.isArray(numbersArray) || numbersArray.length === 0) {
        return "Invalid input. Please provide a non-empty array of numbers.";
    }

    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
    }

    const average = sum / numbersArray.length;
    return `The average of the numbers in the array is: ${average}`;
}

// Example usage:
const myNumbers = [10, 20, 30, 40, 50];
console.log(calculateAverage(myNumbers));

// Write a function called "capitalize" that takes a string as an argument and returns the capitalized version.

function capitalize(string){
    let words = string.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

console.log(capitalize("hello world")); // "Hello World"
console.log(capitalize("this is a test")); // "This Is A Test"

//Write a function called "reverseString", which takes a string as an argument and returns the reverse version. 
// Ebbe kissé belekavarodtam 

function reverseString(string){
    let characters = string.split('');
    let reversedCharacters = characters.reverse();
    let reverseStr = reversedCharacters.join('')

    return reverseStr;
}

let originalString = "hello";
let reversString = reverseString(originalString);
console.log("Eredeti string:", originalString);
console.log("Fordított string:", reversString);


//Write an arrow function called "isPalindrome" that takes a string as an argument and returns true if it's a palindrome, otherwise false.

const isPalindrome = str =>{
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
console.log(isPalindrome('radar')); // Várt eredmény: true
console.log(isPalindrome('hello')); // Várt eredmény: false

//Write a function called "countVowels" that takes a string as an argument and returns the number of vowels.
// itt lesz kérdésem

const countVowels = str => {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;

    for(let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}


const inputString = "Javascript";
const vowelsCount = countVowels(inputString);
console.log("A megadott szövegben lévő magánhangzók száma:", vowelsCount);

//Write a function called "factorial" that takes a number as an argument and returns its factorial.

const factorial = number =>{
    let result = 1; 
    for(let i=1; i <= number; i++){
        result *= i;
    }
    return result;
}

console.log(factorial(5));  // Várható eredmény: 120
console.log(factorial(3));  // Várható eredmény: 6
console.log(factorial(0));  // Várható eredmény: 1

