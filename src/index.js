"use strict";
exports.__esModule = true;
exports.add = void 0;
function add(numbers) {
    var int = numbers.split(",").map(function (x) { return parseInt(x); });
    var negatives = int.filter(function (x) { return x < 0; });
    if (negatives.length > 0)
        throw new RangeError("Negatives are not allowed" + negatives.join(", "));
    return int.filter(function (x) { return x <= 1000; }).reduce(function (a, b) { return a + b; }, 0);
}
exports.add = add;
var result = add("1,3,4,5,6");
console.log(result);
