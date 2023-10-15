const leapYears = function(year) {
    if (!Number.isSafeInteger(year)) return "ERROR";
    if (year < 0) return "ERROR";

    if (year % 4 === 0) {
        if (year % 400 === 0) return true;
        if (year % 100 === 0) return false;
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
