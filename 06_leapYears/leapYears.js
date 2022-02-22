const leapYears = function(year) {
    //You can combine all condition checks into one statement to be ewvaluated
    //year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
    if(year % 400 == 0)
    {
        return true;
    }
    else if(year % 4 == 0 && year % 100 != 0)
    {
        return true;
    }
    else
    {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
