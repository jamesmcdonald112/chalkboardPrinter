// Welcome to the Chalkboard Printer!
const input = require('sync-input');


let name, surname, message, repeats;
name = input("Enter name: ");
surname = input("Enter surname: ");
message = input("Enter message: ");
repeats = input("Enter number of repeats: ")


let count = 0;
while(count < repeats) {
    console.log(`This is ${name} ${surname} and ${message}`);
    count++;
}
