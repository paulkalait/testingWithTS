export function add(numbers: string): number {
    let int = numbers.split(",").map(x => parseInt(x));
    let negatives = int.filter(x => x <  0);

    if(negatives.length > 0)
    throw new RangeError("Negatives are not allowed" + negatives.join(", "))

    return int.filter(x => x <= 1000).reduce((a, b) => a + b, 0)
}
const result = add("1,3,4,5,6")
console.log(result)