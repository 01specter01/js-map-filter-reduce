console.log("1. Gesamtbestellungen abfragen");

const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 },
];

const sumOfall = (sum) => {
    return sum.map((x) => x.amount).reduce((prev, curr) => prev + curr, 0);
};
console.log(sumOfall(orders));

console.log("2. Inkrementieren um 1");
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const plus1ArrayOfNumbers = arrayOfNumbers.forEach((el) => {
    el += 1;
    console.log(el);
});
plus1ArrayOfNumbers;
