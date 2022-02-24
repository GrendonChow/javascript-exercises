const caesar = function(str, num) {
    str = str.split('')
    let result = '';
    str.forEach(c => {
        if(c.match(/[a-zA-Z]/))
        {
            uni = c.charCodeAt(0);
            if(uni >=65 && uni <= 90)//uppercase
            {
                uni = uni + num;
                if(uni > 90) //wraps forward
                {
                    uni = ((uni - 90) % 26) + 65;
                    if(uni == 65)
                    {
                        uni = 91;
                    }
                    uni--; //incremnt used to include the start and end value
                }
                else if(uni < 65)//wrap backwards
                {
                    uni = 90 - ((65 - uni) % 26);
                    if(uni == 90)
                    {
                        uni = 64;
                    }
                    uni++;
                }
            }
            else if(uni >=97 && uni <= 122) //lower case
            {
                uni = uni + num;
                if(uni > 122)//wraps forward
                {
                    uni = ((uni - 122) % 26) + 97;
                    if(uni == 97)
                    {
                        uni = 123;
                    }
                    uni--;
                }
                else if(uni < 97)//wraps backwards
                {
                    uni = 122 - ((97 - uni) % 26);
                    if(uni == 122)
                    {
                        uni = 96;
                    }
                    uni++;
                }
            }
            c = String.fromCharCode(uni);
        }
        result+=c;
    });
    return result;
};

// Do not edit below this line
module.exports = caesar;
