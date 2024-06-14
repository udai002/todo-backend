const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const TodoSchema = mongoose.Schema({
    todoId : {
        type:String,
        default:Date.now()
    } ,
    title:String , 
    description:String,
    isComplete:{
        default:false,
        type:Boolean 
    },
    date:{
        type:Date,
        default:Date.now()
    },
    priority:String
})

module.exports = mongoose.model('Todos' , TodoSchema)