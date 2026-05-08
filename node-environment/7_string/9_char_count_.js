let charCount = (chars) => {
    let char = {}
    for(let c of chars){
        if(char[c]){
            char[c]++
        } else {
            char[c] == 1
        }
    }
    return char
}