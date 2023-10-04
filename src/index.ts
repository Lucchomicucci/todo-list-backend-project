import express from 'express';
import 'dotenv/config';
import './database/connectdb';
import todosRouter from './routes/todos';
import cors from 'cors';

const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true
}));
app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/ping', (_req, res) => {
    console.log('pingueddd')
    res.send('pong')
})

app.use('/api/todos', todosRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})