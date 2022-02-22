const sumAll = function(...args) {
    args.sort();
    args[0];
    args[1];
    if(args[0] < 0|| args[1] < 0)
    {
        return 'ERROR';
    }
    if(typeof args[0] != 'number' || typeof args[1] != 'number')
    {
        return 'ERROR';
    }
    let result = 0;
    for(let i = args[0]; i <= args[1]; i++)
    {
        result+= i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
