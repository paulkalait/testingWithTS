
import {add, fizzBuz, twoSum} from '../src/index'

describe("testing for index.ts file", () => {
    it("empty string should return 0", () => {
        expect(add("")).toBe(0);
    })

    it("adds numbers in array to equal target", () => {
        expect(twoSum([1,3,4,5], 4)).toStrictEqual([0,1])
    })

    it("fizz buzz  algorithm, receives an input and returns output", () =>{
        expect(fizzBuz(10)).toBe("bar")
    })


})