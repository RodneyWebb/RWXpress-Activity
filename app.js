const express = require('express')
const path = require('path')
const app = express()


app.use(express.static(path.join(__dirname, '/public')))

app.use("*", (req, res, next) => {
    console.log(`Someone visited ${req.originalUrl} at ${Date.now()}`)
    next()
})

const trweets = [
    {
        author: "Rodney",
        tweet: "Coding is an enjoyable challenge! 🧩",
        id: "1",
        likes: "3"
    },
    {
        author: "Marlo S",
        tweet: "My name IS MY Name!",
        id: "2",
        likes: "50"
    },
    {
        author: "Pam",
        tweet: "Nah thats your feet eating through your shoes again...😂",
        id: "3",
        likes: "724"
    },
    {
        author: "Bob",
        tweet: "Its the people that have to change the earth, not the presidents or whatever you wanna call them. The people have to change this thing, you know. Because its the people that put them in power, right? So the people have to make decisions for themselves",
        id: "4",
        likes: "970,352"
    },
    {
        author: "Andre",
        tweet: "I believe in myself",
        id: "5",
        likes: "48"
    },
    {
        author: "Walter",
        tweet: "I am not in danger. I am the danger.",
        id: "6",
        likes: "562"
    },
    {
        author: "Cnel",
        tweet: "Can I get a lot of extra polynesian sauce please?! 😋"
    }
]

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/RWxindex.html'))
})

app.get("/trweets", (req, res) => {
    res.send(trweets)
})

app.listen(3000)
console.log("I'm okayyyy...:)")
