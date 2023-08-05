import { RequestHandler, response } from "express";
import { Todo } from "../models/todos";
import { todo } from "node:test";

const TODOS: Todo[] = [];

export const createTodos: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;

  const id = Math.random().toString();

  const newTodo = new Todo(id, text);

  TODOS.push(newTodo);

  res
    .status(201)
    .json({ massage: "Todo created successfully", createdTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ todos: TODOS });
};

export const updateTodos: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const updatedText = (req.body as { text: string }).text;
  const todoIndex = TODOS.findIndex((x) => x.id === todoId);

  if (todoIndex < 0) {
    res.status(404).json({ massage: "Could not find todo!" });
  }
  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);
  res.status(201).json({
    message: "Todo updated successfully",
    updateTodo: TODOS[todoIndex],
  });
};

export const deleteTodos: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const todoIndex = TODOS.findIndex((x) => x.id === todoId);
  if (todoIndex < 0) {
    res.status(404).json({ massage: "Could not find todo!" });
  }
  console.log(TODOS[todoIndex].text, typeof TODOS[todoIndex].id);
  const deletedTodo = { id: TODOS[todoIndex].id, text: TODOS[todoIndex].text };
  // splice just deleted 1 index from todoIndex point
  TODOS.splice(todoIndex, 1);
  res.status(201).json({
    message: `${deletedTodo.id}: ${deletedTodo.text} deleted successfully`,
  });
};
