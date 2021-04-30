import { BaseConvert } from "./algorithms/BaseConvert";
import { DecimalToBinary } from "./algorithms/DecimalToBinary";
import { Stack } from "./datastructures/Stack";
import { StackArray } from "./datastructures/StackArray";

/* Datastructures*/
const stack = new Stack

console.log(stack.isEmpty())

stack.push(5)
stack.push(8)

console.log(stack.peek())

stack.push(11)

console.log(stack.size())
console.log(stack.isEmpty())

stack.push(15)

stack.pop()
stack.pop()
console.log(stack.size())

console.log(stack.toString())

/* Algorithms Problems */
const decimalToBinary = new DecimalToBinary()
const baseConvert = new BaseConvert()

console.log(decimalToBinary.calculate(10))
console.log(decimalToBinary.calculate(0))

console.log(baseConvert.convert(100345, 2))
console.log(baseConvert.convert(100345, 8))
console.log(baseConvert.convert(100345, 16))
console.log(baseConvert.convert(100345, 37))
