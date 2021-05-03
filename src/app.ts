import { BaseConvert } from "./algorithms/BaseConvert";
import { DecimalToBinary } from "./algorithms/DecimalToBinary";
import { Palindrome } from "./algorithms/Palindrome";
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
const palindrome = new Palindrome

console.log(decimalToBinary.calculate(10))
console.log(decimalToBinary.calculate(0))

console.log(baseConvert.convert(100345, 2))
console.log(baseConvert.convert(100345, 8))
console.log(baseConvert.convert(100345, 16))

/* Check palindrome */
let word = 'A torre da derrota'

if(palindrome.check(word)){
    console.log(`A palavra ${word} é palindroma`)
} else {
    console.log(`A palavra ${word} não é palindroma`)
}
