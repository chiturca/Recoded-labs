// Code your solution in this file!

const returnFirstTwoDrivers=function(drivers){
    return drivers.slice(0,2)
};

const returnLastTwoDrivers=function(driver){
    return driver.slice(driver.length-2)
};

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function() {
        return num*num
    }
};

const fareDoubler=function(fare) {
    return fare*2
}

const fareTripler= fare=>fare*3;

function selectDifferentDrivers(drivers, cb) {
    if(cb===returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers)
    }else if (cb===returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers)
    }
}