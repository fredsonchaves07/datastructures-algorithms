import { BalancedSymbols } from "./algorithms/BalancedSymbols";
import { BaseConvert } from "./algorithms/BaseConvert";
import { DecimalToBinary } from "./algorithms/DecimalToBinary";
import { Palindrome } from "./algorithms/Palindrome";
import { TowerOfHanoi } from "./algorithms/TowerOfHanoi";
import { Queue } from "./datastructures/Queue";
import { Stack } from "./datastructures/Stack";
import { StackArray } from "./datastructures/StackArray";

/* Datastructures*/
const stack = new Stack
const queue = new Queue()

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
const palindrome = new Palindrome()
const balancedSymbols = new BalancedSymbols()
let towerOfHanoi: TowerOfHanoi

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

/* TowerOfHanoi */
const discs: number[] = [10, 3, 8, 1, 20, 15, 100, 20, 10, 50, 60, 80]

towerOfHanoi = new TowerOfHanoi(discs)
console.log(towerOfHanoi.toString())

/* Balanced Symbols */
const symbols = '(())'

console.log(balancedSymbols.isBalanced(symbols))

console.log(queue.isEmpty())
queue.enqueue('Jhon')
queue.enqueue('Jack')
console.log(queue.toString())
queue.enqueue('Camila')
queue.dequeue()
console.log(queue.toString())
console.log(queue.size())


