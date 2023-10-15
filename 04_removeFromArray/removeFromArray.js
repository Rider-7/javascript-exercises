const removeFromArray = function(array, ...elements) {
    let removedArray;
    for (let i = 0; i < elements.length; i++) {
            removedArray = array.filter((el) => !elements.includes(el));
        }
    return removedArray; 
    }

// Do not edit below this line
module.exports = removeFromArray;
