// Code your solution in this file!
let returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };

  let returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };

  let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  let createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };

  let fareDoubler = createFareMultiplier(2);

  let fareTripler = createFareMultiplier(3);

  let selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };