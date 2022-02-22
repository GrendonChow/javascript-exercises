const reverseString = function(str) {
const splitstr = str.split("");
let result = '';
//JS has a reverse() function, must split string to an array, reverse then join
//back into whole string.
//result = str.split("").reverse().join('');
for(const c of splitstr)
{
    result = c + result;
}
return result;
};

// Do not edit below this line
module.exports = reverseString;
