import { Queue } from "../datastructures/Queue"


class HotPotato{

    private queue = new Queue<string>()
    private elimitadeList: string[] =  []

    constructor(elementList: string[], num: number){
        for(let i = 0; i < elementList.length; i++){
            this.queue.enqueue(elementList[i])
        }

        while(this.queue.size() > 1){
            for(let i = 0; i < num; i++){
                this.queue.enqueue(String(this.queue.dequeue()))
            }
        }

        this.elimitadeList.push(String(this.queue.dequeue()))

        this.printResult()
    }

    private printResult(): Object{
        return {
            eliminated: this.elimitadeList,
            winner: this.queue.dequeue()
        }
    }
}

export { HotPotato }