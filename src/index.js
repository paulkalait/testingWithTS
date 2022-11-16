"use strict";
exports.__esModule = true;
exports.fizzBuz = exports.twoSum = exports.add = void 0;
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
function twoSum(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] + nums[i] === target) {
                nums = [i, j];
                return nums;
            }
        }
    }
    return nums;
}
exports.twoSum = twoSum;
;
console.log(twoSum([2, 3, 4, 5], 5));
function fizzBuz(input) {
    if (input % 3 == 0 && input % 5 == 0) {
        return "FooBar";
    }
    else if (input % 3 == 0) {
        return "Foo";
    }
    else if (input % 5 == 0) {
        return "bar";
    }
    else {
        return input;
    }
}
exports.fizzBuz = fizzBuz;
console.log(fizzBuz(10));
