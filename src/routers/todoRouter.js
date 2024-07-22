import { Router } from "express";
import {
  listTodo,
  createTodo,
  updateTodo,
  getTodo,
  deleteTodo,
} from "../controllers/todoController.js";

const router = Router();

router.get("/", listTodo);

router.post("/", createTodo);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);

router.get("/:id", getTodo);

export default router;
