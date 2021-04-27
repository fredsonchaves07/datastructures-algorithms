class Stack <T>{
    
    private count: number
    private items: any

    constructor(){
        this.count = 0
        this.items = {}
    }

    push(element: T){
        this.items[this.count] = element
        this.count ++
    }

    pop(): T | undefined{
        if(this.isEmpty()){
            return undefined
        }

        this.count --

        const element = this.items[this.count]

        delete this.items[this.count]

        return element
    }

    peek(): T | undefined{
        if(this.isEmpty()){
            return undefined
        }

        return this.items[this.size() - 1]
    }

    isEmpty(): boolean{
        return this.size() === 0
    }

    clear(): void{
        this.items = {}
        this.count = 0
    }

    size(): number{
        return this.count
    }

    toString(): string{
        if(this.isEmpty()){
            return ''
        }

        let objString = `${this.items[0]}`

        for(let i = 1; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`
        }

        return objString
    }
}

export { Stack }