class Stack<T>{
    
    private items: T[] 

    constructor(){
        this.items = []
    }

    push(element: T): void{
        this.items.push(element)
    }

    pop(): T{
        return this.items.pop()
    }

    peek(): T{
        return this.items[this.size() - 1]
    }

    isEmpty(): boolean{
        return this.size() === 0
    }

    clear(): void{
        this.items = []
    }

    size(): number{
        return this.items.length
    }
}

export { Stack }