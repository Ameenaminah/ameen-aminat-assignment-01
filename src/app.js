const assignment = require('./assignment.js');

const { sumOfNumbersTo, countEvenNumbersWithin, celsiusToFahrenheit } = assignment;

if (sumOfNumbersTo && typeof sumOfNumbersTo === 'function'){
    console.log(sumOfNumbersTo(99));
}

if (countEvenNumbersWithin && typeof countEvenNumbersWithin === 'function'){
    console.log(countEvenNumbersWithin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}

if (celsiusToFahrenheit && typeof celsiusToFahrenheit === 'function'){
    console.log(celsiusToFahrenheit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}