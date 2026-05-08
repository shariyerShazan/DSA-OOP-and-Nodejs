let temperature = [ -4 , -10 , 33 , 54 , "error",34 ,21 , 18 , -12 , -3, 8 , -9 ]

let tempDiff = (tempArr) => {
    let lower = tempArr[0]
    let higher = tempArr[0]

     for(let i = 0 ;  i< tempArr.length ; i++){
        if(typeof  tempArr[i] !== "number"){ continue}
        if(lower > tempArr[i]){
            lower = tempArr[i]
        }
        if(higher < tempArr[i]){
            higher = tempArr[i]
        }
     }
     return higher - lower
}
console.log(tempDiff(temperature))