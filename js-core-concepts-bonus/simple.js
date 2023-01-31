// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum += i;
// }
// console.log('Sum: ' + sum);

// let sum = 0;
// for (let i = 5; i >= 1; i--) {
//     sum += i;

// }
// console.log("sum: ", sum);

// let add = 0;
// function sum(i) {
//     if (i >= 1) {
//         add = add + i;
//         sum(i - 1);
//     }
//     return add;

// }
function sum(i) {
    if (i === 1) {
        return 1;
    }
    return i + sum(i - 1);
}

const i = 5;

const totalSum = sum(i);
console.log(totalSum);


/*
5 + sum(i-1)-->5 + sum(4)
5 + i + sum(i-1) --> 5 + 4 +sum(3)
5 + 4 + i + sum(2)--> 5 + 3 + sum(2)
5 + 4 + 3 + 2 + sum(1)
5 + 4 + 3 + 2 + 1

*/