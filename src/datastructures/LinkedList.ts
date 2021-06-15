import { defaultEquals } from "../utils"

class Node<T> {
    
    element: T
    next: Node<T> | undefined

    constructor(element: T, next?: Node<T>){
        this.element = element
        this.next = next
    }
}

class LinkedList<T>{

    private count: number
    private head: Node<T> | undefined
    private equalsFn: any

    constructor(equalsFn = defaultEquals){
        this.count = 0
        this.head = undefined
        this.equalsFn = equalsFn
    }

    push(element: T): void{
        const node = new Node(element)
        let nodeCurrent: Node<T> | undefined

        if(!this.head){
            this.head = node
        } else {
            nodeCurrent = this.head
            while(nodeCurrent != null){
                nodeCurrent = nodeCurrent.next
            }
            nodeCurrent = node
        }

        this.count ++
    }

    removeAt(index: number){
        if(index == 0 && index < this.count){
            let nodeCurrent: Node<T> | undefined = this.head

            if(index == 0){
                this.head = nodeCurrent?.next
            } else {
                let previous: Node<T> | undefined

                for(let i = 0; i < index; i++){
                    previous = nodeCurrent
                    nodeCurrent = nodeCurrent?.next
                }
                previous?.next = nodeCurrent?.next
            }
        }
    }
}

export { LinkedList }