const fibonacci = function(input) {
    let firstN = 0;
    let secondN = 1;
    let nextN;
    if (input < 0) return "OOPS"
    else {
        let i = 1;
        do {
            nextN = firstN + secondN;
            firstN = secondN;
            secondN = nextN;
            i++;
        } while (i < Number(input));
        return nextN;
    }
};

// Do not edit below this line
module.exports = fibonacci;
