let age:number = 50;
let club:string = "Tottenham Hostspur";
const isFamous:boolean = false;
let famous:boolean;

age = 99;

console.log(age);

function add(num1:number, num2:number){
    return num1 + num2;
}

console.log(add(4,4));

const output = doubleItAndConsole(10);
function doubleItAndConsole(num:number):void{
    const result = num * 2;
    console.log(result);
}

function fullName (firstName:string, lastName:string):string{
    return firstName + ' ' + lastName;
}

console.log(fullName('Mobarak', 'Ali'));