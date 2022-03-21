const ftoc = function(temp) {
    let convertedTemp;
    convertedTemp = (temp - 32) * (5/9);
    roundedCTemp = Math.round(convertedTemp * 10) / 10;
    return roundedCTemp;
};

const ctof = function(temp) {
    let convertedTemp;
    convertedTemp = temp * (9/5) + 32;
    roundedCTemp = Math.round(convertedTemp * 10) / 10;
    return roundedCTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
