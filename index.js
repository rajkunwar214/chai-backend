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
const harsh = {
  "login": "harshmaurya27",
  "id": 137767009,
  "node_id": "U_kgDOCDYoYQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/137767009?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/harshmaurya27",
  "html_url": "https://github.com/harshmaurya27",
  "followers_url": "https://api.github.com/users/harshmaurya27/followers",
  "following_url": "https://api.github.com/users/harshmaurya27/following{/other_user}",
  "gists_url": "https://api.github.com/users/harshmaurya27/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/harshmaurya27/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/harshmaurya27/subscriptions",
  "organizations_url": "https://api.github.com/users/harshmaurya27/orgs",
  "repos_url": "https://api.github.com/users/harshmaurya27/repos",
  "events_url": "https://api.github.com/users/harshmaurya27/events{/privacy}",
  "received_events_url": "https://api.github.com/users/harshmaurya27/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Harsh Maurya",
  "company": null,
  "blog": "mauryaharsh464@gmail.com",
  "location": "Robertsganj  India",
  "email": null,
  "hireable": null,
  "bio": "I am a fullstack mern developer and \r\ncontinuously enhencing my skills",
  "twitter_username": null,
  "public_repos": 31,
  "public_gists": 0,
  "followers": 1,
  "following": 3,
  "created_at": "2023-06-26T08:10:35Z",
  "updated_at": "2025-03-29T04:33:50Z"
}
app.get('harshapi',(req,res)=>{
  res.json({harsh})
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on git init ${process.env.PORT}`)
})