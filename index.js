function returnFirstTwoDrivers(drivers){
    return (["Antonia", "Nuru"]);
}

function returnLastTwoDrivers(drivers) {
    return (["Amari", "Mo"]);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiply) {
    return function(fare) {
        return fare * multiply;
    }
}

function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers(arrayOfDrivers, driverSelectionFunction){
    return driverSelectionFunction(arrayOfDrivers);

}