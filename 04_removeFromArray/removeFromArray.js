const removeFromArray = function (arrayItem, ...moreArguments) {

    // const elementsToRemove = new Set(moreArguments);
    // const newArray = arrayItem.filter((items) => {
    //     return !elementsToRemove.has(items);
    // });
    // console.log(newArray);
    // return newArray;

    //alternate method only using arrays, no sets
    const newArray = [];

    arrayItem.forEach(element => {
        if (!moreArguments.includes(element)) {
            newArray.push(element);
        }
    });

    return newArray;



};

// Do not edit below this line
module.exports = removeFromArray;
