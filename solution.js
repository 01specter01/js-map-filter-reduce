console.log("1. Gesamtbestellungen abfragen");

const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 },
];

const calcSums = (someofAll) =>
    someofAll.reduce((sums, val) => {
        Object.keys(val).forEach(
            (v) =>
                (sums[`sum-${v}`] = !sums[`sum-${v}`]
                    ? val[v]
                    : sums[`sum-${v}`] + val[v])
        );
        return sums;
    }, {});

console.log(calcSums(orders));
