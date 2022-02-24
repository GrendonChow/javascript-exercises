const fibonacci = function(num) {
    const arr = [ 0, 1, 0];
    if(num < 0)
    {
        return "OOPS";
    }
    {
        for(let i = 0; i < num; i++)
        {
            arr[2] = arr[0] + arr[1];
            arr[1] = arr[0];
            arr[0] = arr[2];
        }
        return arr[2];
    }
};

// Do not edit below this line
module.exports = fibonacci;
