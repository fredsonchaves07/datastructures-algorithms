import { defaultEquals } from "../utils"

class Node<T> {
    
    element: T
    next: Node<T>

    constructor(element: T, next?: Node<T>){
        this.element = element
        this.next = next
    }
}

class LinkedList<T>{

    private count: number
    private head: T | undefined
    private equalsFn: any

    constructor(equalsFn = defaultEquals){
        this.count = 0
        this.head = undefined
        this.equalsFn = equalsFn
    }
}

export { LinkedList }