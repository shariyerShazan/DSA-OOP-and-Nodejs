const sum = (num) => {
     if(typeof num !== "number"){
        throw console.error("Invalid number!");
     }
     if(num<=0){
        throw console.error("Please give positive number")
     }
     let sum = 0
     for(let i = 1 ; i <= num ; i++){
        sum+=i
     }
     console.log(sum)
}
sum(2)
// sum(-10)
// sum("num")

const recursionSum = (num)=>{
    if(num === 5){
        return
    }
    let reSum = 0
    recursionSum((reSum += num));
    console.log(reSum);
}
recursionSum(5)