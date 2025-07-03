// chapter #17 to 20
// Arrays and Loops

// ==== question 1 & 2 ====
// var multiArray = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// document.write("<h1>Multi-dimensional Array:</h1>");
// for (var i = 0; i < multiArray.length; i++) {
//     for (var j = 0; j < multiArray[i].length; j++) {
//         document.write(multiArray[i][j] + " ");
//     }
//     document.write("<br>");
// }


// ==== question 3 ====
// document.write("<h1>Counting from 1 to 10:</h1>");
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }


// ==== question 4 ====
// var number = parseInt(prompt("Enter a number to show its multiplication table:"));
// var length = parseInt(prompt("Enter the length of the multiplication table:"));
// document.write("<h1>Multiplication Table of " + number + ":</h1>");
// for (var i = 1; i <= length; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }


// ==== question 5 ====
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// document.write("<h1>Fruits:</h1>");
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }
// document.write("<h1>Fruits and their index:</h1>");
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }


// ==== question 6 ====
// document.write("<h1>Counting:</h1>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }
// document.write("<br><h1>Reverse Counting:</h1>");
// for (var i = 15; i >= 1; i--) {
//     document.write(i + ", ");
// }
// document.write("<br><h1>Even Numbers:</h1>");
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }
// document.write("<br><h1>Odd Numbers:</h1>");
// for (var i = 1; i <= 20; i += 2) {
//     document.write(i + ", ");
// }
// document.write("<br><h1>Series (Multiples of 2):</h1>");
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// }


// ==== question 7 ====
// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchItem = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();
// var found = false;
// for (var i = 0; i < bakeryItems.length; i++) {
//     if (bakeryItems[i] === searchItem) {
//         document.write(searchItem + " is available at index " + i + " in our bakery.<br>");
//         found = true;
//         break;
//     }
// }
// if (!found) {
//     document.write("We are sorry. " + searchItem + " is not available in our bakery.<br>");
// }


// ==== question 8 ====
// var numbers = [24, 53, 78, 91, 12];
// var maxNumber = numbers[0];
// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] > maxNumber) {
//         maxNumber = numbers[i];
//     }
// }
// document.write("<h1>Array items: " + numbers.join(", ") + "</h1>");
// document.write("<h1>The largest number is: " + maxNumber + "</h1>");


// ==== question 9 ====
// var numbers = [24, 53, 78, 91, 12];
// var minNumber = numbers[0];
// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] < minNumber) {
//         minNumber = numbers[i];
//     }
// }
// document.write("<h1>Array items: " + numbers.join(", ") + "</h1>");
// document.write("<h1>The smallest number is: " + minNumber + "</h1>");


// ==== question 10 ====
// document.write("<h1>Multiples of 5:</h1>");
// for (var i = 5; i <= 100; i += 5) {
//     document.write(i + ", ");
// }

// End of chapter #17 to 20







// chapter #21 to 25
// String Methods

// ==== question 1 ====
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// document.write("<h1>Welcome " + fullName + "!</h1>");


// ==== question 2 ====
// var favoriteMobile = prompt("Enter your favorite mobile phone model:");
// var length = favoriteMobile.length;
// document.write("<h1>My favorite phone is: " + favoriteMobile + "</h1>");
// document.write("<h1>Length of string: " + length + "</h1>");


// ==== question 3 ====
// var country = "Pakistani";
// var index = country.indexOf("n");
// document.write("<h1>String: " + country + "</h1>");
// document.write("<h1>Index of 'n': " + index + "</h1>");


// ==== question 4 ====
// var str = "Hello World";
// var lastIndex = str.lastIndexOf("l");
// document.write("<h1>String: " + str + "</h1>");
// document.write("<h1>Last index of 'l': " + lastIndex + "</h1>");


// ==== question 5 ====
// var country = "Pakistani";
// var charAtIndex = country.charAt(3);
// document.write("<h1>String: " + country + "</h1>");
// document.write("<h1>Character at index 3: " + charAtIndex + "</h1>");


// ==== question 6 ====
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(" ", lastName);
// document.write("<h1>Welcome " + fullName + "!</h1>");


// ==== question 7 ====
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// document.write("<h1>City: " + city + "</h1>");
// document.write("<h1>After replacement: " + newCity + "</h1>");


// ==== question 8 ====
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");
// document.write("<h1>Original Message: " + message + "</h1>");
// document.write("<h1>After replacement: " + newMessage + "</h1>");


// ==== question 9 ====
// var str = "472";
// var num = parseInt(str);
// document.write("<h1>Value: " + str + "</h1>");
// document.write("<h1>Type: " + typeof str + "</h1>");
// document.write("<h1>Value: " + num + "</h1>");
// document.write("<h1>Type: " + typeof num + "</h1>");


// ==== question 10 ====
// var userInput = prompt("Enter a string:");
// var upperCaseInput = userInput.toUpperCase();
// document.write("<h1>User Input: " + userInput + "</h1>");
// document.write("<h1>Upper Case: " + upperCaseInput + "</h1>");


// ==== question 11 ====
// var userInput = prompt("Enter a string:");
// var titleCaseInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// document.write("<h1>User Input: " + userInput + "</h1>");
// document.write("<h1>Title Case: " + titleCaseInput + "</h1>");


// ==== question 12 ====
// var num = 35.36;
// var str = num.toString().replace(".", "");
// document.write("<h1>Number: " + num + "</h1>");
// document.write("<h1>Result: " + str + "</h1>");


// ==== question 13 ====
// var username = prompt("Enter your username:");
// if (username.includes("!") || username.includes(",") || username.includes(".") || username.includes("@")) {
//     alert("Please enter a valid username without special characters like !, ,, ., or @.");
// }


// ==== question 14 ====
// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchItem = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();
// var found = false;
// for (var i = 0; i < bakeryItems.length; i++) {
//     if (bakeryItems[i] === searchItem) {
//         document.write(searchItem + " is available at index " + i + " in our bakery.<br>");
//         found = true;
//         break;
//     }
// }
// if (!found) {
//     document.write("We are sorry. " + searchItem + " is not available in our bakery.<br>");
// }


// ==== question 15 ====
// var password = prompt("Enter your password:");
// if (password.length < 6 || !/[a-zA-Z]/.test(password[0]) || !/^[a-zA-Z0-9]+$/.test(password)) {
//     alert("Password must be at least 6 characters long, start with a letter, and contain only letters and numbers.");
// }


// ==== question 16 ====
// var university = "University of Karachi";
// var characters = university.split("");
// document.write("<h1>University: " + university + "</h1>");
// for (var i = 0; i < characters.length; i++) {
//     document.write(characters[i] + "<br>");
// }


// ==== question 17 ====
// var userInput = prompt("Enter a string:");
// var lastCharacter = userInput.charAt(userInput.length - 1);
// document.write("<h1>User Input: " + userInput + "</h1>");
// document.write("<h1>Last Character: " + lastCharacter + "</h1>");


// ==== question 18 ====
// var text = "The quick brown fox jumps over the lazy dog";
// var count = (text.match(/the/gi) || []).length;
// document.write("<h1>Text: " + text + "</h1>");
// document.write("<h1>There are " + count + " occurrence(s) of the word 'the'.</h1>");

// End of chapter #21 to 25