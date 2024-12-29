//task 1
let firstName = 'Yersaiyn';
let age = 19;
let isStudent = true;

console.log(firstName);
console.log(age);
console.log(isStudent);

//task 2
const pi = 3.14;
let length = 2 * pi * 5;

console.log(length);

//task 3
let lastName = 'Abdulla';
let grade = 90;
let isStudying = false;
let something1 = null;
let something2;

console.log(typeof lastName);
console.log(typeof grade);
console.log(typeof isStudying);
console.log(typeof something1);
console.log(typeof something2);

//task 4
let book = {bookName: 'Harry Potter', author: 'Rowling', publicationYear: 1997};
console.log(book.bookName);
console.log(book.author);
console.log(book.publicationYear);

let nums = [100, 200, 300];
console.log(nums[0] + nums[1] + nums[2]);

function func(num1, num2) {
    return num1 + num2;
}

//task 5
firstName = 'Yersaiyn';
age = 19;
city = 'Qyzylorda';
console.log(`
    name: ${firstName}
    age: ${age}
    city: ${city}`);

// task 6
function string(firstName, age, city) {
    return `
    name: ${firstName}
    age: ${age}
    city: ${city}`;
}