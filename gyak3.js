// Create an object representing your dream car

const car = {
    brand: "Vokswagen",
    model: "Id 3",
    year: 2022,
    color: "blue",
    isElectric: true
}


// Access and print the color of your dream car.
console.log("Car model:", car["color"]);

// Modify the year of your dream car to 2025.

car.year = 2025;
console.log("Updated car details:", car);


// Add a new property to your dream car object representing its horsepower.
car.price = 25000;
console.log("Car with price:", car);

//  Delete the property representing the fuel type from your dream car object.
 delete car.price;
 console.log("Car without price property:", car);

// Create an object representing your favorite book with properties for title, author, and number of pages.

const book = {
    author: "J. R. R. Tolkien",
    title: "A Gyűrűk Ura I-III",
    number_of_pages: 1774,
}

// Access and print the title of your favorite book.
console.log(book)

// Modify the author of your favorite book to your favorite author.

book.author = "Bán Mór"
console.log("Book with author:", book);