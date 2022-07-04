const repeatString = function(word, num) {
    if (num < 0) {
        return "ERROR";
    }
    let res = ""; 
    for (let i = 0; i < num; i++) {
        res += word;
    }
    return res; 
};

// Do not edit below this line
module.exports = repeatString;
