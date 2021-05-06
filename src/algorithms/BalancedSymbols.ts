import { Stack } from "../datastructures/Stack"

class BalancedSymbols{

    private stack = new Stack<string>()
    private symbols: string = '([{'
    private index: number = 0
    private balanced: boolean = true

    isBalanced(symbolString: string): boolean{
        while(this.index < symbolString.length && this.balanced){
            let symbol = symbolString[this.index]

            if(this.symbols.indexOf(symbol) >= 0){
                this.stack.push(symbol)
            } else if(this.stack.isEmpty()){
                this.balanced = false
            } else {
                let topSymbol = String(this.stack.pop())
                
                if(!this.matches(topSymbol, symbol)){
                    this.balanced = false
                }
            }

            this.index += 1
        }

        if(this.balanced && this.stack.isEmpty()){
            return true
        }

        return false
    }

    matches(open: string, close: string):boolean{
        const opens: string = '([{'
        const closers: string = ')]}'

        return opens.indexOf(open) === closers.indexOf(close)
    }
}

export { BalancedSymbols }