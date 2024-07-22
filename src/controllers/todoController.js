import Todo from "../models/todoModel.js";

export const listTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTodo = async (req, res) => {
  try {
    const todo = new Todo({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
    });
    await todo.save();
    res.status(201).json({ message: "Created a todo" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "Todo succesfully updated" });
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Todo succesfully deleted" });
  } catch (error) {
    res.status(404).json(error.message);
  }
};
