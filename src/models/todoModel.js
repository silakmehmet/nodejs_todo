import { Schema, model } from "mongoose";
import { database } from "../../config.js";

const todoSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = model(database, todoSchema);

export default Todo;
