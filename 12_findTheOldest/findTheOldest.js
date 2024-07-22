const findTheOldest = function(people) {
    for (let person of people) {
        if (!('yearOfDeath' in person)) {
            person['yearOfDeath'] = new Date().getFullYear();
        }
    }

    return people.reduce((oldestPerson, person) => {
        if (person.yearOfDeath - person.yearOfBirth > oldestPerson.yearOfDeath - oldestPerson.yearOfBirth) {
            oldestPerson = person;
        }
        return oldestPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
