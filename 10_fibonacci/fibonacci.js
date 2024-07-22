const fibonacci = function(limit) {
    if (limit < 0) return "OOPS";
    limit = +limit;
    if (limit === 0) return 0;

    let previousNums = [0, 1];
    let currentNum = 1;

    for (let i = 1; i < limit; i++) {
        currentNum = previousNums[0] + previousNums[1];
        previousNums[0] = previousNums[1];
        previousNums[1] = currentNum;
    }

    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
