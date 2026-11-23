//Start by initializing an empty array using let array = [];. This array will store elements that you'll manipulate using different array methods
let array = [];

// Create an array of books
const books = [
    "The Catcher in the Rye",
    "To Kill a Mockingbird",
    "The Great Gatsby",
    "The Lord of the Rings",
    "The Alchemist"
];

// Display the books
function displayBooks() {
    const displayElement = document.querySelector("#displayBooks");
    displayElement.innerHTML = books.join("<br>");
}

// Push Method: Add a book to the end
function addElement() {
    const elementInput = document.querySelector("#addButton");
    if (elementInput.value !== "") {
        books.push(elementInput.value);
        elementInput.value = "";
        updateBooks();
    }
}

// Pop Method: Remove the last book
function removeButton() {
    books.pop();
    updateBooks();
}

// Shift Method: Remove the first book
function shiftButton() {
    books.shift();
    updateBooks();
}

// Unshift Method: Add a book to the beginning
function unshiftButton() {
    const elementInput = document.querySelector("#unshiftInput");
    if (elementInput.value !== "") {
        books.unshift(elementInput.value);
        elementInput.value = "";
        updateBooks();
    }
}

// Splice Method: Replace a book at a specific index
function spliceButton() {
    books.splice(4, 1, "The Hobbit");
    updateBooks();
}

// ForEach Method: Display each book
function forEachButton() {
    const displayElement = document.querySelector("#displayBooks");
    displayElement.innerHTML = "";
    books.forEach(function(book) {
        displayElement.innerHTML += book + "<br>";
    });
}

// Update the displayed books
function updateBooks() {
    displayBooks();
}


//Displaying Array State