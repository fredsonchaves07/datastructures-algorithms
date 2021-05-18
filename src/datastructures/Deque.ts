
class Deque<T>{

    private count: number
    private lowestCount: number
    private items: any

    constructor(){
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    addFront(element: T): void{
        if(this.isEmpty()){
            this.addBack(element)
        } else if(this.lowestCount > 0){
            this.lowestCount --
            this.items[this.lowestCount] = element
        } else {
            for(let i = this.count; i > 0; i--){
                this.items[i] = this.items[i - 1]
            }
            this.count ++
            this.lowestCount = 0
            this.items[0] = element
        }
    }

    addBack(element: T): void{
        this.items[this.count] = element
        this.count ++
    }

    removeFront(): T | undefined{
        if(this.isEmpty()){
            return undefined
        }

        const result = this.items[this.lowestCount]

        delete this.items[this.lowestCount]

        this.lowestCount ++

        return result
    }

    removeBack(): T | undefined{
        if(this.isEmpty()){
            return undefined
        }

        this.count --

        const element = this.items[this.count]

        delete this.items[this.count]

        return element
    }

    peekFront(): T | undefined{
        if(this.isEmpty()){
            return undefined
        }

        return this.items[this.lowestCount]
    }

    peekBack(): T | undefined{
        if(this.isEmpty()){
            return undefined
        }

        return this.items[this.size() - 1]
    }

    size(): number{
        return this.count - this.lowestCount
    }
    
    isEmpty(): boolean{
        return  this.size() === 0
    }

    clear(): void{
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    toString(): string {
        if(this.isEmpty()){
            return ''
        }

        let objString = `${this.items[this.lowestCount]}`

        for(let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`
        }

        return objString
    }
}

export { Deque }