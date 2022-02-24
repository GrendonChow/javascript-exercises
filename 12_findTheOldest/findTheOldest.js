const findTheOldest = function(people) {
    //reducer will iterate through objects and return value of anom function
    const reducer = (accum, curr) => {
        currAge = calcAge(curr.yearOfBirth, curr.yearOfDeath);
        accumAge = calcAge(accum.yearOfBirth, accum.yearOfDeath);
        if(currAge > accumAge)
        {
            accum = curr;
        }
        return accum;
    }
    result = people.reduce(reducer)
    return result;
};

//refactored to use death year rather than person object to decouple.
const calcAge = function(birth, death)
{
    if(!death)
    {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
