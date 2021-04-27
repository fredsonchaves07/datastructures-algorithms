import { StackArray } from "./datastructures/StackArray";

const stack = new StackArray()

/* Verifica se a pilha está vazia */
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