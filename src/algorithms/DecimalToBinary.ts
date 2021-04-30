import { Stack } from "../datastructures/Stack"

class DecimalToBinary{

    private stack = new Stack()

    calculate(decNumber: number): string{
        let resultDecimal = decNumber
        let binaryString = ""

        if(resultDecimal == 0){
            binaryString = "0"
        }

        while(resultDecimal != 0){
            let restDivison = Math.floor(resultDecimal % 2)
            resultDecimal = Math.floor(resultDecimal / 2)
            
            this.stack.push(restDivison)
        }

        while(!this.stack.isEmpty()){
            binaryString += this.stack.pop()
        }

        this.stack.clear()

        return binaryString
    }

}

export { DecimalToBinary }