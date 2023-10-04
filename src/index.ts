import express from 'express';
import todosRouter from './routes/todos'
const app = express()

app.use(express.json())

const PORT = 4000

app.get('/ping', (_req, res) => {
    console.log('pingueddd')
    res.send('pong')
})

app.use('/api/todos', todosRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})