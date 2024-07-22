const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {

    return people.reduce((oldestPerson, person) => {
        if (getAge(person.yearOfBirth, person.yearOfDeath) > getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath)) {
            oldestPerson = person;
        }
        return oldestPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
