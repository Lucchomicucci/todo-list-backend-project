import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send('Fetching all todos')
})

router.post('/', (_req, res) => {
    res.send('Create todo')
})

export default router;