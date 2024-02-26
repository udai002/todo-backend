const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const Port = dotenv.parsed.PORT || 3000
app = express()

console.log(dotenv.parsed.PORT)

try{
    mongoose
    .connect('mongodb+srv://karumuriudaisai002:udai123@cluster0.4o0q2x6.mongodb.net/')
    .then(() => console.log('db connected'))
    .catch(err => console.log(err))
}catch(e){
    console.log(e)
}


app.use(express.json())

app.get('/' , (req , res)=>{
    res.send({message:"Welcome to express app"})
})

app.listen(Port , ()=>{
    console.log('app is listening...')
})

module.exports = app
