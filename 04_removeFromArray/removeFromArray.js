const removeFromArray = function(...args) {
    const inputarray = args[0];
    const resarray = []; 

    inputarray.forEach((item) => {
        if (!args.includes(item)) {
            resarray.push(item);
        }
    });

    return resarray; 

};

// Do not edit below this line
module.exports = removeFromArray;
