const leapYears = function (year) {

    console.log('1900 % 400 : ', 1900 % 400);
    console.log('1900 % 100 : ', 1900 % 100);



    if (year % 400 != 0 && year % 100 == 0) {
        return false;
    } else {
        if (year % 4 == 0) {
            return true;
        } else if (year % 4 != 0) {
            return false;
        }
    }



};



// Do not edit below this line
module.exports = leapYears;
