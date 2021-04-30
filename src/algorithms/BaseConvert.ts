import { Stack } from "../datastructures/Stack"

class BaseConvert{

    private stack = new Stack()
    private DIGITS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    convert(decNumber: number, base: number): string{
        let resultDecimal = decNumber
        let baseString = ""

        if(base >= 2 && base <= 36){
            while(resultDecimal != 0){
                let restDivison = Math.floor(resultDecimal % base)
                resultDecimal = Math.floor(resultDecimal / base)
    
                this.stack.push(restDivison)
            }
    
            while(!this.stack.isEmpty()){
                baseString += this.DIGITS[Number(this.stack.pop())]
                
            }
        }

        this.stack.clear()

        return baseString
    }
}

export { BaseConvert }