const removeFromArray = function(arr, ... removeArr) {
    //JS has an includes() method that checks if array has value
    //for loop can be replace using includes to push values into new array
    // arr.forEach(item => {
    //     if(!removeArr.includes(item))
    //     {
    //          newArray.push(item)
    //     }
    // })
    // Another way is to combine filter where it filters and builds an array
    // that does not imclude the values.
    // return arr.filter(val => !removeArr.includes(val));
    for(let i = 0; i < removeArr.length; i++)
    {
        for(let j = 0; j < arr.length; j++)
        {
            if(arr[j] === removeArr[i])
            {
                arr[j] = null;
            }
        }
    }
    arr = arr.filter(x => x != null)
    return arr;
};
// Do not edit below this line
module.exports = removeFromArray;
