const express = require('express')
const dotenv = require('dotenv').config()
const Port = dotenv.parsed.PORT || 3000
app = express()

console.log(dotenv.parsed.PORT)

app.use(express.Router())

app.get('/' , (req , res)=>{
    res.send('Hello this is a express api')
})

app.listen(Port , ()=>{
    console.log('app is listening...')
})

module.exports = app
