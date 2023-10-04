import mongoose from "mongoose";
const { Schema, model } = mongoose;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true,
        default: false
    }
})

export const Todo = model('Todo', todoSchema)
