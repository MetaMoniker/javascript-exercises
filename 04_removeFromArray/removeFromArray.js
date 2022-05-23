const removeFromArray = function (arrayItem, ...moreArguments) {

    const elementsToRemove = new Set(moreArguments);
    const newArray = arrayItem.filter((items) => {
        return !elementsToRemove.has(items);
    });
    console.log(newArray);
    return newArray;



};

// Do not edit below this line
module.exports = removeFromArray;
