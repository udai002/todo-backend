const express = require('express')
const { default: mongoose } = require('mongoose')
const  route  = require('./Routes/todoRoutes')
const dotenv = require('dotenv').config() 
const cors = require('cors')
// const mongoose = require('mongoose')
const Port = dotenv.parsed.PORT || 3000
app = express()

//connecting to mongodb altas using mongoose
mongoose.set("strictQuery" , false)
const connectMongo = async ()=>{
    try{
        const conn = await mongoose.connect('mongodb+srv://karumuriudaisai002:udai123@cluster0.4o0q2x6.mongodb.net/')
        
    }catch(e){
        console.log(e)
    }
}

connectMongo()

app.use(express.json())
app.use(cors())

app.get('/' , (req , res)=>{
    res.send({message:"Welcome to express app"})
})

app.use('/api' , route)


app.listen(Port , ()=>{
    console.log(`app is listening... at http://localhost:${Port}`)
})

module.exports = app
