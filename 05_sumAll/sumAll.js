const sumAll = function(a, b) {

    if (!Number.isSafeInteger(a) || !Number.isSafeInteger(b)) return "ERROR";
    if (a < 0 || b < 0) return "ERROR";

    if (a === b) return a+b;
    let start;
    let stop;
    if (a < b) {
        start = a;
        stop = b;
    }
    if (a > b) {
        start = b;
        stop = a;
    }

    let sum = 0;
    for(let i = start; i <= stop; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
