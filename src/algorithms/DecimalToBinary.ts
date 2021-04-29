import { Stack } from "../datastructures/Stack"

class DecimalToBinary{

    private stack = new Stack()

    calculate(decNumber: number): number{
        let resultDecimal = decNumber

        while(resultDecimal != 0){
            let restDivison = resultDecimal % 2
            
            this.stack.push(restDivison)
        }
    }

}

export { DecimalToBinary }