const repeatString = function(string, num) {

    if (num < 0) return "ERROR";

    let conString = "";
    for (let i = 0; i < num; i++) {
        conString += string;
    }
    return conString;
};

// Do not edit below this line
module.exports = repeatString;
