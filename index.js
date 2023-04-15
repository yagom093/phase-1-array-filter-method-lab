// Code your solution here
const drivers = ['Bobbie', 'Sammie', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, name) {
    return drivers.filter(function (driverName) {
        return driverName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(drivers, letters) {
    let lenghtOfLetters = letters.length;
    return drivers.filter(function (driverName) {
        return driverName.slice(0, lenghtOfLetters) === letters;
    });
}

function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.name.toLowerCase() === name.toLowerCase();
    });
}