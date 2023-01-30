
// https://leetcode.com/problems/convert-the-temperature/
// Convert the Temperature


/**
 * @param {number} celsius
 * @return {number[]}
 */
 var convertTemperature = function(celsius) {
    let kelvin = celsius + 273.15
    let fahrenheit = celsius * 1.80 + 32.00
    return [kelvin.toFixed(5),fahrenheit.toFixed(5)]
};

console.log(convertTemperature(36.50))