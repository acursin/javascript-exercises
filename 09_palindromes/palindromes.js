const palindromes = function (string) {
    const stringChars = string
        .toLowerCase()
        .split('')
        .filter(char => (char.toUpperCase() != char.toLowerCase()) || +char)

    return stringChars.join('') === stringChars.toReversed().join('');
};

// Do not edit below this line
module.exports = palindromes;
