
const reverseString = function(word) {
    return word.split("").reverse().join("");
};

/*
const reverseString = function(word) {
    let result = "";
    for (let i = (word.length - 1); i >= 0; i--) {
        let letter = word.charAt[i];
        result = result.concat(letter);
    }
    return result;
};
*/

// Do not edit below this line
module.exports = reverseString;
