const findTheOldest = function(array) {
    return array.reduce(function(oldest, select) {
       const oldAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
       const nowAge = getAge(select.yearOfBirth, select.yearOfDeath);
       if (oldAge < nowAge) return select
       else return oldest
    })
};

function getAge(birthYear, deathYear) {
    if (!deathYear) {
        deathYear = new Date().getFullYear();
    } return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
