const express = require("express");
const {fork} = require("child_process")
const mongoos = require('mongoose');
const app = express();
app.get("/", (req, res) => {
    const child = fork("longTask.js")
    child.send("start-process")
    child.on("message", sum => {
        res.send(sum.toString())
    })
    // let sum=0;
    // for(let index =0;index<1e10;index++){
    //     sum+=sum;
    // }
    // res.send(sum.toString())
 })
async function connectToDB() {
    mongoos.connect('mongodb://localhost:27017/Nima', { useNewUrlParser: true, useUnifiedTopology: true }, async (err, db) => {
        if (err) { throw err; } else {
            console.log("Database Connected");
        }
    });
}
connectToDB();
app.listen(3300, () => {
    console.log("ready : http://localhost:3300");
})