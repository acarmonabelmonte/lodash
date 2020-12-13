// Before we get started implementing our new methods, we need to create an object to contain them
const _ = {
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    inRange(number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (end < start) {
            let temp = end;
            end = start;
            start = temp;
        }
        return number >= start && number < end;
    },
    words(str) {
        return str.split(' ');
    },
    pad(str, len) {
        const srtLen = str.length;
        if (srtLen >= len) {
            return str;
        } else {
            let startPaddingLength = Math.floor((len - srtLen) / 2);
            let endPaddingLength = len - srtLen - startPaddingLength;
            let paddedString = `${' '.repeat(startPaddingLength)}${str}${' '.repeat(endPaddingLength)}`;
            return paddedString;
        }
    },
    has(obj, key) {
        let hasValue = key in obj;
        return hasValue;
    },
};

// Do not write or modify code below this line.
module.exports = _;