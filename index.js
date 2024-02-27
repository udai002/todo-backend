const express = require('express')
const { default: mongoose } = require('mongoose')
const dotenv = require('dotenv').config() 
// const mongoose = require('mongoose')
const Port = dotenv.parsed.PORT || 3000
app = express()

console.log(dotenv.parsed.PORT)

// try{
//     mongoose
//     .connect('mongodb+srv://karumuriudaisai002:udai123@cluster0.4o0q2x6.mongodb.net/')
//     .then(() => console.log('db connected'))
//     .catch(err => console.log(err))
// }catch(e){
//     console.log(e)
// }

mongoose.set("strictQuery" , false)
const connectMongo = async ()=>{
    try{
        const conn = await mongoose.connect('mongodb+srv://karumuriudaisai002:udai123@cluster0.4o0q2x6.mongodb.net/')
        console.log("mongodb connected...." , conn)
    }catch(e){
        console.log(e)
    }
}

connectMongo()


app.use(express.json())

app.get('/' , (req , res)=>{
    res.send({message:"Welcome to express app"})
})

app.listen(Port , ()=>{
    console.log('app is listening...')
})

module.exports = app
