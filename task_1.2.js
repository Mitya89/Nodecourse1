//Задание 1.2.1
let walletSum = 100;
const cucumberPrice = 20;
const applePrice = 7;
const carrotPrice = 5;
const cherryPrice = 22;
const meatPrice = 40;

let moneyRest = (walletSum - (cucumberPrice + applePrice + carrotPrice + cherryPrice + meatPrice));
console.log(moneyRest);
//Конец задания 1.2.1

//Задание 1.2.2
let walletSum = 100;
const cucumberPrice = 20;
const applePrice = 15;
const carrotPrice = 15;
const cherryPrice = 7;
const meatPrice = 25;

if (walletSum >= cucumberPrice) {
    walletSum -= cucumberPrice;
}
console.log(walletSum, '++1+')
if (walletSum >= applePrice) {
    walletSum -= applePrice;
}
console.log(walletSum, '++2+')
if (walletSum >= carrotPrice) {
    walletSum -= carrotPrice;
}
console.log(walletSum, '++3+')
if (walletSum >= cherryPrice) {
    walletSum -= cherryPrice;
}
console.log(walletSum, '++4+')
if (walletSum >= meatPrice) {
    walletSum -= meatPrice;
}
console.log(walletSum, 'BALANCE')
//Конец задания 1.2.2

//Задание 1.2.3
let walletSum = 100;
const cucumberPrice = 120;
const applePrice = 40;
const carrotPrice = 35;
const cherryPrice = 7;
const meatPrice = 25;

if (walletSum >= cucumberPrice) {
    console.log(walletSum -= cucumberPrice, 'cucumber');
 }
 else { console.log('Not enough money');
} 
if (walletSum >= applePrice) {
    console.log(walletSum -= applePrice, 'apple');
}
else { console.log('Not enough money');
}
if (walletSum >= carrotPrice) {
    console.log(walletSum -= carrotPrice, 'carrot');
}
else { console.log('Not enough money');
}
if (walletSum >= cherryPrice) {
    console.log(walletSum -= cherryPrice, 'cherry');
}
else { console.log('Not enough money');
}

if (walletSum >= meatPrice) {
 console.log(walletSum -= meatPrice, 'cherry');
} 
else { console.log('Not enough money');
}
console.log(walletSum, 'BALANCE');
//Конец задания 1.2.3