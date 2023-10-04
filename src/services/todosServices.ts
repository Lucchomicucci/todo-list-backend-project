import { Todo } from "../models/Todo"
import { Request, Response } from 'express';

export const getAllToDos = async (_req: Request, res: Response) => {
    try{
        const todos = await Todo.find()
        return res.status(200).json({data: todos})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error: "Server error"})
    }
}

export const createNewToDo = async (req: Request, res: Response) => {
    try{
        const {title, done} = req.body
        const newTodo = {
            title,
            done
        }
        const newToDoSchema = new Todo(newTodo)
        const createdTodo = await newToDoSchema.save();
        return res.status(200).json({data: createdTodo, message: "Created successfully"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error: "Server error"})
    }
}

export const deleteToDo = async (req: Request, res: Response) => {
    try{
        const {id} = req.params
        const toDoToDelete = await Todo.findById(id)

         // Se chequea que exista un gasto con ese ID:
         if(!toDoToDelete) return res.status(404).json({error: "ToDo doesn't exist"})

         await toDoToDelete.deleteOne()
         return res.status(200).json({success: "ToDo deleted", todo_deleted: toDoToDelete})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error: "Server error"})
    }
}
