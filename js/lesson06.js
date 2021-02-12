"use strict";
let age = 50;
let club = "Tottenham Hostspur";
const isFamous = false;
let famous;
age = 99;
console.log(age);
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(4, 4));
const output = doubleItAndConsole(10);
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(fullName('Mobarak', 'Ali'));
