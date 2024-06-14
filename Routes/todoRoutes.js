const express = require('express')
const Todo = require('../models/Todo')
const routes = express.Router()


// to create todo 
routes.post('/createTodo' , async (req , res)=>{
    const {title , description , date , priority , } = req.body 

    const newTodo = {
        title , description  , date , priority
    }
    try{

        const createdData = await Todo.create(newTodo)
        res.status(200).send(createdData)
    }catch(e){
        res.status(500).send({err:"something went wrong" ,e})
    }


})

// to fetch all the todos 
routes.get('/getTodos' , async (req , res)=>{
    try{
        const todoData =  await  Todo.find({})
        res.send(todoData)
    }catch(e){
        res.status(500).send({err:"Something went wrong" , e})
    }
})

// to update todo by id 
routes.put('/updateTodo/:id' , async (req, res)=>{
    const {id} = req.params
    const {title , description , date , priority } = req.body 
    try{
        const updateTodo = await Todo.updateOne({todoId:id} ,{title , description  , priority})
        res.send(updateTodo)
    }catch(e){
        res.status(500).send({err:"Something went wrong" , e})
    }
})

routes.delete('/deleteTodo/:id' , async (req , res)=>{
    const {id} = req.params
    try{
        const deleteItem = await Todo.deleteOne({todoId:id})
        res.send(deleteItem)
    }catch(e){
        res.status(500).send({err:"Something went wrong" , e})
    }
})

module.exports = routes