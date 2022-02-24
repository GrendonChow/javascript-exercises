const palindromes = function (str) {
    //regex is used to remove non alphanumeric chars
    str = str.replace(/\W/g,'').toLowerCase();
    //Converts the str to an char seperated array to use Array.reverse()
    //then joins array back to a string.
    reverseStr = str.split('').reverse().join('');
    return reverseStr === str;
};

// Do not edit below this line
module.exports = palindromes;
