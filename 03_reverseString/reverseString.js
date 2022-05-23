let words = 'hello';

const reverseString = function (words) {
    let strArr = [];

    // put words in array
    for (i = 0; i < words.length; i++) {
        strArr.push(words[i]);
    }

    //reverse array and to string
    let output1 = strArr.reverse().join('');
    return output1;


};

// Do not edit below this line
module.exports = reverseString;
