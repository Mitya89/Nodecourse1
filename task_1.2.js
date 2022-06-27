//Задание 1.2.1
let walletSum = 100;
const cucumberPrice = 20;
const applePrice = 7;
const carrotPrice = 5;
const cherryPrice = 22;
const meatPrice = 40;

let moneyRest = (walletSum - (cucumberPrice + applePrice + carrotPrice + cherryPrice + meatPrice));
if (moneyRest < 0) {
    moneyRest = 'Not enough money to buy all 5 goods';
}
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
console.log(walletSum, 'cucumber')
if (walletSum >= applePrice) {
    walletSum -= applePrice;
}
console.log(walletSum, 'apple')
if (walletSum >= carrotPrice) {
    walletSum -= carrotPrice;
}
console.log(walletSum, 'carrot')
if (walletSum >= cherryPrice) {
    walletSum -= cherryPrice;
}
console.log(walletSum, 'cherry')
if (walletSum >= meatPrice) {
    walletSum -= meatPrice;
}
else {console.log(walletSum, 'BALANCE')};

//Конец задания 1.2.2

//Задание 1.2.3
let walletSum = 100;
const cucumberPrice = 120;
const applePrice = 40;
const carrotPrice = 35;
const cherryPrice = 7;
const meatPrice = 25;

if (walletSum >= cucumberPrice) {
    console.log(walletSum -= cucumberPrice, 'for 1 kg of cucumber');
 }
 else { console.log('Not enough money');
} 
if (walletSum >= applePrice) {
    console.log(walletSum -= applePrice, 'for 1 kg of apple');
}
else { console.log('Not enough money');
}
if (walletSum >= carrotPrice) {
    console.log(walletSum -= carrotPrice, 'for 1 kg of carrot');
}
else { console.log('Not enough money');
}
if (walletSum >= cherryPrice) {
    console.log(walletSum -= cherryPrice, 'for 1 kg of cherry');
}
else { console.log('Not enough money');
}

if (walletSum >= meatPrice) {
 console.log(walletSum -= meatPrice, 'for 1 kg of meat');
} 
else { console.log('Not enough money');
}
console.log(walletSum, 'BALANCE');
//Конец задания 1.2.3