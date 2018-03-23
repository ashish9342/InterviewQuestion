//my code
function centuryFromYear(year) {
 var isYear = Math.floor(year / 100);
 console.log(isYear);
 return (year % 100 === 0) ?isYear:++isYear;
}

// one liner
function centuryFromYear(year) {
    return Math.floor((year % 100 !== 0) ? (year / 100) + 1 : (year / 100));
}
