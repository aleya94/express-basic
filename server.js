const express = require('express');
const app = express();

//get post delete put patch

// 2 parameter (route, call back)
//app.all("*", (cb)=>{}) * mean anything i will accept 

// app.all("*",(req,res)=>{
//     console.log("========>",req.method)
// app.all("/home",(req,res)=>{
//     console.log("========>",req.method)

// res.send(`<h1>Hello from Express</h1>`)
// })

//now individually run kori 

app.get("/", (req, res)=>{
    console.log("=======>", req.method)
    res.send(`<h1>Hello from GET</h1>`)
})
app.post("/", (req, res)=>{
    console.log("=======>", req.method)
    res.send(`<h1>Hello from POST</h1>`)
})
app.put("/", (req, res)=>{
    console.log("=======>", req.method)
    res.send(`<h1>Hello from PUT</h1>`)
})
app.patch("/", (req, res)=>{
    console.log("=======>", req.method)
    res.send(`<h1>Hello from PATCH</h1>`)
})
app.delete("/", (req, res)=>{
    console.log("=======>", req.method)
    res.send(`<h1>Hello from DELETE</h1>`)
})


app.listen(7000,() => {
    console.log(`Server is running at port 7000`)
})