import { Stack } from "../datastructures/Stack"


class TowerOfHanoi{

    private discs: number[]
    private qtdDiscs: number
    private pillar1 = new Stack<number>()
    private pillar2 = new Stack<number>()
    private pillar3 = new Stack<number>()

    constructor(discs: number[]){
        this.discs = discs.sort((a, b) => {
            if(a < b){
                return 1
            }
            if(a > b){
                return -1
            }
            return 0
        })

        this.qtdDiscs = this.discs.length

        this.discs.forEach(disc => {
            this.pillar1.push(disc)
        })

        this.execute(this.qtdDiscs, this.pillar1, this.pillar3, this.pillar2)        
    }

    private execute(
        discAmount: number, 
        pillarSource: Stack<number>, 
        pillarDest: Stack<number>, 
        pillarAuxi: Stack<number>
    ){
        if(discAmount == 1){
            pillarDest.push(Number(pillarSource.pop()))
        } else {
            this.execute(discAmount - 1, pillarSource, pillarAuxi, pillarDest)
            pillarDest.push(Number(pillarSource.pop()))

            this.execute(discAmount - 1, pillarAuxi, pillarDest, pillarSource)
        }
    }

    toString(){
        return `pilar1: ${this.pillar1.toString()} \npilar2: ${this.pillar2.toString()} \npilar3: ${this.pillar3.toString()}`
    }
}

export { TowerOfHanoi }