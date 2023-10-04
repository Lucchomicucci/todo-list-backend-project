import express from 'express'
import { getAllToDos, createNewToDo, deleteToDo } from '../services/todosServices'

const router = express.Router()

router.get('/', getAllToDos)
router.post('/new', createNewToDo)
router.delete('/delete/:id', deleteToDo)

export default router;