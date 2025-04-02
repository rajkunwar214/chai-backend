require('dotenv').config()
const express = require('express')
const app = express()

// computer virtual port range is 0 to 65535,

app.get('/', (req, res) => {
  res.send('Raj Kunwar')
})
app.get("/twitter",(req,res)=>{
  res.send('this is the twitter Account')
})
app.get("/facebook",(req,res)=>{
  res.send("this is facabook account")
})
app.get('/google',(req,res)=>{
  res.send("this is google account")
})
app.get("/micro",(req,res)=>{
  res.send("<h3>hey kunwar</h3>")
})
app.get('/raj', function (req, res) {
  console.dir(res.headersSent) // false
  res.send('OK')
  console.dir(res.headersSent) // true
})
app.get('/swati',(req,res)=>
{
  res.send("this is the swati page");
})
app.get("/random",(req,res)=>{
  res.send("thiss is random page")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on git init ${process.env.PORT}`)
})