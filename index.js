const express = require('express')

app = express()

app.use(express.Router())

app.get('/' , (req , res)=>{
    res.send('Hello this is a express api')
})

module.exports = app

