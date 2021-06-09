import { Queue } from "../datastructures/Queue"


class HotPotato{

    private queue = new Queue<string>()
    private eliminatedList: string[] =  []
    private winner: string = ''

    constructor(elementList: string[], num: number){
        for(let i = 0; i < elementList.length; i++){
            this.queue.enqueue(elementList[i])
        }

        while(this.queue.size() > 1){
            for(let i = 0; i < num; i++){
                this.queue.enqueue(String(this.queue.dequeue()))
            }
        }

        this.eliminatedList.push(String(this.queue.dequeue()))
    }

    getEliminated(): string[]{
        return this.eliminatedList
    }

    getWinner(): string{
        return this.winner
    }
}

export { HotPotato }