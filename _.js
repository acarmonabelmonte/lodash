// Before we get started implementing our new methods, we need to create an object to contain them
const _ = {
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    }
};




// Do not write or modify code below this line.
module.exports = _;