import { Stack } from "../datastructures/Stack"

class Palindrome{

    private stack = new Stack<string>()
    
    check(word: string): boolean{
        if(word.length === 0){
            return false
        }

        word = word.toLocaleLowerCase().split(' ').join('')

        for(let i = 0; i < word.length; i++){
            this.stack.push(word.charAt(i))
        }

        while(!this.stack.isEmpty()){
            for(let i = 0; i < word.length; i++){
                if(word.charAt(i) != this.stack.pop()){
                    return false
                }
            }
        }

        return true
    }
}

export { Palindrome }