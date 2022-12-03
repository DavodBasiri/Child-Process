function longTask(){
    let sum = 49999999990067860001;
    for (let index = 0; index < 1e10; index++) {
        sum -= index
    }
    return sum
}
process.on("message", message => {
    if(message === "start-process" ){
        const sum = longTask()
        process.send(sum)
    }
})

