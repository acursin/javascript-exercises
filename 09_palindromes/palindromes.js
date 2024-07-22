const palindromes = function (str) {
    const palindrome = str
        .toLowerCase()
        .split('')
        .filter(char => (char.toUpperCase() != char.toLowerCase()) || +char)

    return palindrome.join('') === palindrome.toReversed().join('');
};

// Do not edit below this line
module.exports = palindromes;
