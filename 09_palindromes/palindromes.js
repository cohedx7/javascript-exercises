const palindromes = function (word) {
    input = word.toLowerCase().replace(/[^a-z]/g, "");
    return (
        input
            .split('')
            .reverse()
            .join('') == input
    );
};

// Do not edit below this line
module.exports = palindromes;
