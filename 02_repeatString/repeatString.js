

const repeatString = function (stringArg, numArg) {

    if (numArg >= 0) {
        let output = stringArg.repeat(numArg);
        return output;
    } else {
        let output = 'ERROR';
        return output;
    }


};

// Do not edit below this line
module.exports = repeatString;
