
import {add} from '../src/index'

describe("testing for index.ts file", () => {
    it("empty string should return 0", () => {
        expect(add("")).toBe(0);
    })


})