import { isIfStatement } from "typescript";

export function add(numbers: string): number {
    let int = numbers.split(",").map(x => parseInt(x));
    let negatives = int.filter(x => x <  0);

    if(negatives.length > 0)
    throw new RangeError("Negatives are not allowed" + negatives.join(", "))

    return int.filter(x => x <= 1000).reduce((a, b) => a + b, 0)
}
const result = add("1,3,4,5,6")
console.log(result)

export function twoSum(nums: number[], target: number): number[] {

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1;  j < nums.length; j++){
           if( nums[j] + nums[i] === target){
            nums = [i, j]
            return nums;
           }
        }
    }
return nums;
};
console.log(twoSum([2,3,4,5],  5))

export function fizzBuz(input: number){

        if(input  % 3 == 0 && input % 5 ==  0){
             return "FooBar" 
        }
        else if(input% 3 == 0){
            return "Foo"
        }
        else if(input% 5 == 0){
             return "bar"
        }else{
             return input
        }
    
}
console.log(fizzBuz(10));
