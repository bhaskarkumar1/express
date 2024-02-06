const express=require('express')
const app=express()
const port=5000

// let ejs = require('ejs');
app.set("view engine","ejs")


//middle ware to use static file 
app.use(express.static("public"))


app.get("/",(req,res)=>{
    console.log("You are in Home route")
    // res.send("Google Home Page") 
    // its only send data line by line
    console.log(__dirname)
    // res.sendFile(__dirname+"/welcome.html")
    res.render('welcome.ejs',{user:"Bhaskar"})
})


app.get("/users",(req,res)=>{
    // res.send("Hii USERS")
    // res.sendFile(__dirname+"/index.html")
    res.render("users",{condition:false})
})
app.get("/status",(req,res)=>{
    res.json({status:"Server is running with good health"})
})

app.listen(port,()=>{
    console.log(`APP listening on port ${port}`)
})