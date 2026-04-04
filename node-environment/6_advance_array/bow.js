let i = 0 , c =0 
while(true){
    i += 1
    if(i === 10){
        c += 1
        i = 0
    }
    if(c==3){
        process.stdout.write("Bow");
        break
    }
}