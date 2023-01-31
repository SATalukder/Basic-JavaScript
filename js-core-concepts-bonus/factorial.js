// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial *= i;
// }
// console.log(factorial);

function factorial(number) {
    //This is stoping Condition.
    if (number === 1) {
        return 1;
    }
    return number * factorial(number - 1);

}

const num = 5;
const factorialResult = factorial(num);
console.log("result: " + factorialResult);


/*
5 * factorial(4)
5 * 4 * factorial(3)
5 * 4 * 3 * factorial(2)
5 * 4 * 3 * 2 * factorial(1)
5 * 4 * 3 * 2 * 1
                <<<<----------
*/